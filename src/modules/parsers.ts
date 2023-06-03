import axios from 'axios'
import * as cheerio from 'cheerio'
import { Meta } from './../models/meta'

export const parseHTML = (html: string): Meta => {
  const $ = cheerio.load(html)

  return {
    title: $('title').text(),
    description: $('meta[name="description"]').attr('content') || '',
    image: $('meta[property="og:image"]').attr('content') || '',
    url: $('meta[property="og:url"]').attr('content') || ''
  }
}

export const fetchURLMeta = async (url: string): Promise<Meta | string> => {
  try {
    const response = await axios.get(url)
    return parseHTML(response.data)
  } catch (error) {
    console.error('Error:', error)
    return 'Error'
  }
}
