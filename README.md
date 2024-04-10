![Scrapper API](scrapper-api.png)

# Scrapper API

Scrapper API is a Node.js API that allows you to scrape website metadata. It retrieves the `title`, `description`, `image`, and `URL` of a given web page. This API can be used to extract essential information from web pages for various purposes such as building web scrapers, generating previews, or aggregating data.

## Installation (Using docker)

To user Scrapper API, run following command:
```sh
docker run -p 3000:3000 docker pull ghcr.io/akgoze/scrapper:latest
```

## Installation (Without docker)

To use the Scrapper API, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/akgoze/Scrapper.git
   ```
2. Install the dependencies:

   ```sh
   cd Scrapper
   npm install
   ```

3. Start the server:

   ```sh
   npm start
   ```

The API server will start running on `http://localhost:3000`.

## API Endpoints

The following endpoints are available in the Scrapper API:

### 1. GET `/scrapper`

- Description: Scrapes the metadata of a given web page.
- Parameters:
- `url` (query parameter): The URL of the web page to scrape.
- Example: `http://localhost:3000/scrapper?url=https://www.example.com`

This endpoint retrieves the following metadata from the web page:

- `title`: The title of the web page.
- `description`: The description of the web page.
- `image`: The URL of the image associated with the web page.
- `url`: The URL of the web page.

Example response:

```json
{
  "title": "Fatih Akgöze - Frontend Engineer",
  "description": "Hello. My name is Fatih Akgöze. I'm Frontend Engineer.",
  "image": "https://akgoze.dev/Assets/Images/share-image.png",
  "url": "https://akgoze.dev"
}
```

## Error Handling

If an error occurs while scraping the web page or processing the request, the API will respond with a 500 status code and an error message in the response body.

Example error response:

```json
{
  "error": "An error occurred while scraping the web page."
}
```

## Dependencies

The Scrapper API relies on the following dependencies:

- [Express](https://www.npmjs.com/package/express): A fast, unopinionated, and minimalist web framework for Node.js.
- [Axios](https://www.npmjs.com/package/axios): A promise-based HTTP client for making requests to external APIs.
- [Cheerio](https://www.npmjs.com/package/cheerio): A fast, flexible, and lean implementation of core jQuery for parsing HTML.

## Support

If you need any help or have questions or feedback regarding the Scrapper API, please feel free to [open an issue](https://github.com/akgoze/Scrapper/issues) on the GitHub repository.
