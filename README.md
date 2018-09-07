# NextJS Example
Simple NextJS app that followed the tutorial https://learnnextjs.com/

## Running
```
npm install
npm run devWithServer
```

### Why devWithServer
Because links were masked, to make cleaner URLs. Example: ```<Link as=``` which creates paths that Next does not know how to handle for server side render.  Therefore a simple Express app is needed to link the masked paths to the actual paths.  If no Links were masked then ```npm run dev``` would sufice and there would be no need for a custom ```server.js``` file.

Example of masked URL:
```
http://localhost:3000/p/hello-nextjs
```
Will now map to:
```
http://localhost:3000/post?title=Hello%20Next.js
```

## Additional Documentation
* https://github.com/zeit/next.js#how-to-use
* https://github.com/zeit/styled-jsx
