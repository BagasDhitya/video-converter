# Yo Converter

Yo Converter is a simple full-stack project that allows you to convert YouTube links into downloadable files. It provides a user-friendly website where you can easily convert and save your favorite YouTube videos on your device.

Please note that the backend API is not deployed yet, so you will need to set up your own IP address and port to run the backend server.

## Technologies Used

- Frontend: React with Typescript
- Backend: Node.js with Express framework

## Features

- Convert YouTube links: Simply paste a YouTube video link into the input field and click the "Convert" button to convert it into a downloadable file format.
- Download videos: Once the conversion is complete, you can download the converted video file directly to your device.
- User-friendly interface: The website is designed to be intuitive and easy to navigate, making the conversion process hassle-free.

## Installation

1. Clone the repository:
```
git clone https://github.com/BagasDhitya/video-converter.git
```

3. Install dependencies for the frontend:
```
cd video-converter
npm install
```

4. Start the frontend development server:
```
npm run dev
```

5. Set up the backend server:
- Navigate to the `server` directory:
  ```
  cd server
  ```

- Update the IP address and port in the `index.js` file to match your local environment:
  ```javascript
  const ip = 'YOUR_IP_ADDRESS';
  const port = YOUR_PORT_NUMBER;
  ```

- Install dependencies for the backend:
  ```
  npm install
  ```

- Start the backend server:
  ```
  npm start
  ```

## Contribution

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or want to connect, you can reach me via email at bagasdhitya@example.com.

Feel free to explore the project on GitHub: [Yo Converter](https://github.com/BagasDhitya/video-converter)

