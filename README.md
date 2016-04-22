#react-carousel

##example

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Carousel</title>
        <link rel="stylesheet" href="../styles.css"> 
      </head>
      <body>
        <div data-carousel='{
                              "id": "carousel1", 
                              "images": ["https://example.com/img/img1.jpg", 
                                         "https://example.com/img/img2.jpg", 
                                         "https://example.com/img/img3.jpg"],
                              "speed": 3000
                            }'>
        </div>
        <div data-carousel='{
                              "id": "carousel2", 
                              "images": ["https://example.com/img/img4.jpg", 
                                         "https://example.com/img/img5.jpg", 
                                         "https://example.com/img/img6.jpg"]
                            }'>
        </div>
        <script src="index.js"></script>
      </body>
      </html>
