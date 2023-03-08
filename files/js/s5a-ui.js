<!DOCTYPE html>
<html>

<head>
    <title>Shreya5art®</title>
    <base href="/" />
    <link rel="stylesheet" href="files/css/index1.css" />
    <link rel="stylesheet" href="files/css/dark1.css" />
    <link rel="stylesheet" media="(max-width: 1000px)" href="files/css/tab1.css" />
    <link rel="stylesheet" media="(max-width: 600px)" href="files/css/mobile.1css" />
    <link href="files/icon/fontawesome-free-6.2.1-web/css/all.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="files/js/common.js"></script>
    <script src="files/js/index.js"></script>
    <script src="database.js"></script>

    <title>Shreya5art®</title>
    <base href="/" />
    <link href="files/icon/fontawesome-free-6.2.1-web/css/all.css" rel="stylesheet">
    <link href="files/icon/icomoon/style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="files/css/ui.css" />
    <link rel="stylesheet" href="files/css/s5a.css" />
    <link rel="stylesheet" href="files/css/s5a-light.css" />
    <link id="theme" rel="stylesheet" href="files/css/s5a-dark.css" />
    <script src="files/js/s5a-ui.js"></script>

    <script src="files/js/jszip/dist/jszip.min.js" ></script>
    <script src="files/js/filesaver.js" ></script>
    <script src="files/js/ui.js"></script>
    <script src="files/js/s5a.js"></script>

</head>

<body onload="console.log(this); generatePages(true); generatePage1(document,window.location.pathname); ">
    
    <canvas id="imgCanvas" ></canvas>
    <iframe id="pageFrame" src="template.html" style="position: absolute; width: 100%; height: 100%; z-index: 10;" onload="console.log(this);generatePage1(iframeRef(this),window.location.pathname)"></iframe>

    <div id="topbar" class="extendedSection row" style="max-width: 950px;">
        <img src="files/res/logo.png" class="logo" />
        <nav>
            <a href="#home">Home</a>
            <a href="#gallery">Gallery</a>
            <a href="#order">Order</a>
            <a href="#tools">Tools</a>
            <a href="#blog">Blog</a>
            <a href="#about">About</a>
        </nav>
    </div>
    <div id="tools" class="mainContainer row extendedSection">
        <script>
            generateToolsPage();
        </script>
    </div>
    <div id="gallery" class="mainContainer row extendedSection" onload="loadArtworks(this);">
        <script>
            generateGalleryPage();
        </script>
        

    </div>
    <div id="galleryViewer" class="mainContainer row extendedSection">
<!--
        <div class="col artworkViewer" style="position: sticky; bottom: 0; vertical-align: bottom;">

            <div class="artworkFrame artworkViewer portrait">
                <img class="thumbnail" src="files/img/2.jpg" />
                <span class="title">Aishwarya Rai from Ponniyin Selvan: I</span>
            </div>
            <div class="artworkSwitcher horizontalScroller">
                <i class="fa-solid fa-chevron-left"></i>
                <div class="thumbnail" style="background-image: url(files/img/1.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/2.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/3.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/1.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/2.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/3.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/1.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/2.jpg);"></div>
                <div class="thumbnail" style="background-image: url(files/img/3.jpg);"></div>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        </div>
        <div class="col single artworkDescription" style="vertical-align: bottom;">
            <h2>Aishwarya Rai form Ponniyin Selvan: I</h2>
            <p>Colour pencil drawing of mesmerizing Mrunal thakur as Sita Mahalaxmi/ Princess Noor Jahaan from the movie
                Sita Ramam 💙😍

                Loved drawing every bit of it. After a really long time I found joy in creating. Everything felt so
                fresh and new like it used to when I started this journey.. felt like I fell in love with my passion all
                over again and the feeling is so empowering and comforting :')❤️
                I recently watched the movie and loved it soo much.. couldn't resist myself from drawing the Beauty ❤️
                She looked so damn gorgeous in every single frame of the movie! </p>
            <table class="table">
                <tr>
                    <th>Medium</th>
                    <td>Color Pencil</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>A4 </td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>10 Days </td>
                </tr>
            </table>
            <div class="salesBox">
                <div class="col saleCustomizer" style="text-align: left; vertical-align: bottom;">
                    <label>
                        <span>Material</span>
                        <select>
                            <option></option>
                        </select>
                    </label>
                    <label>
                        <span>Size</span>
                        <select>
                            <option></option>
                        </select>
                    </label>
                    <label>
                        <span>Frame</span>
                        <select>
                            <option></option>
                        </select>
                    </label>
                </div>
                <div class="col " style="text-align: right; vertical-align: bottom;">
                    <span class="price">500</span><br>
                    <button class="button colored">Add to Cart</button>
                </div>

            </div>
            <div style="font-size: .7em; margin-top: 2em;">
                <p>Offer: 5% off on checkout</p>
                <p>Free Shipping in India</p>
                <p>Ships in 4-5 business Days</p>
            </div>

        </div>

        <div class="col artworkTools" style="max-width: 400px; padding: 0 50px; vertical-align: top; margin-top: 2em;">
            <h3>Tools Used</h3>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
            <div class="tool"></div>
        </div>
        <div class="col artworkTools"
            style="max-width: 300px; text-align: left; width: 100%; vertical-align: top; margin-top: 2em;">
            <h3>Description of Original Artwork</h3>
            <table class="table">
                <tr>
                    <th>Medium</th>
                    <td>Color Pencil</td>
                </tr>
                <tr>
                    <th>Country of Origin</th>
                    <td>India</td>
                </tr>
                <tr>
                    <th>Size</th>
                    <td>A4 </td>
                </tr>
                <tr>
                    <th>Time</th>
                    <td>10 Days </td>
                </tr>
                <tr>
                    <th>Country of Origin</th>
                    <td>India</td>
                </tr>
            </table>
        </div>
        <div class="col artworkTools">
            <h3>Reviews</h3>
            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
        </div>-->
    </div>
    <div id="about" class="mainContainer row ">

        <div class="col main">
            <div id="aboutNotebook"  class="notebook about">
                <div class="paperstack tabbed active" style="border-color: #F98E8E;">
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">About Me</div>
                    <div class="dp" style="float: unset; margin: 1em auto;"></div>
                    <div class="table">
                        <div class="row">
                            <span class="th">Name</span>
                            <span class="td">Shreya</span>
                        </div>
                        <div class="row">
                            <span class="th">From</span>
                            <span class="td">Patna, Bihar, India</span>
                        </div>
                        <div class="row">
                            <span class="th">Education</span>
                            <span class="td">Schooling from DAV Public School,<br> College : IGNOU</span>
                        </div>
                        <div class="row">
                            <span class="th">Profession</span>
                            <span class="td">Working as a freelancer, Full-time artist</span>
                        </div>
                            
                        
                    </div>
                </div>
                <div class="paperstack" style="border-color: #F98E8E;">

                    <div class="aboutSection active" tabindex="0">
                        I am Shreya. A 23 yo full time artist from Bihar,India.I specialise in graphite,charcoal and
                        colour pencil medium. I started this journey when I was 15 as a hobbyist and kept going without
                        thinking about anything. Then my journey kept improving with small but consistent milestones
                        like building a social media presence, creating a brand, adding other mediums to my portfolio,
                        accepting customised orders and brand Collabs. I will be honest with you I didn't plan single
                        thing that happened to me till now... I trusted the process and did or am doing what is in my
                        hand- Hardwork. Hope everything will make sense one day! Right now I am enjoying my journey and
                        will keep doing! 🧡 
                    </div>
                </div>
                <div class="paperstack tabbed" style="border-color: #A471C3;">
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Early Life</div>
                </div>
                <div class="paperstack " style="border-color: #A471C3;">
                    <div class="aboutSection slideShow active" tabindex="0">
                        <h3>Early Life</h3>
                        I was born and brought up in Patna, Bihar. I did my schooling at DAV public school. My father
                        was in a job that included
                        frequent transfers
                        So we kept changing places. From childhood, I used to find drawing or creating very fascinating.
                        I used to draw in my
                        free time. I was hyped in
                        my school as 'the artist kid' . I was a very sincere and hardworking student. Academically too,
                        I was a great student.
                        Always secured good marks in my exams.
                        <br>
                        I have always been an introvert. Mixing up with other people was always hard for me. So mostly I
                        used to stay alone and
                        talk very less. From the 8th standard life started changing. I started having serious confidence
                        issues. 
                        <a class="aboutSwitch fa-solid fa-chevron-right" onclick="switchAboutSection(this,true);"></a>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                        The introverted
                        side of my personality started growing stronger. I started having anxiety issues also. I started
                        losing interest in my
                        studies. An academically brilliant student to an average student, the transition took away a lot
                        from me. . Everything
                        started feeling difficult. From waking up to gathering the courage to face everyone, nothing
                        felt worth it. I started
                        isolating myself. Kept skipping classes so I don’t have to face others.
                        <br>
                        My depression kept growing. I had no idea what was happening. Used to stay upset and irritated
                        the whole day. I felt
                        dead inside. That was when I re-started my long-lost hobby - ‘drawing’.
                        <a class="aboutSwitch fa-solid fa-chevron-left" onclick="switchAboutSection(this,false);"></a>
                        
                    </div>
                </div>
                <div class="paperstack tabbed" style="border-color: #71A6C3;">
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Start</div>
                </div>
                <div class="paperstack " style="border-color: #71A6C3;">
                    <div class="aboutSection slideShow" tabindex="0">
                        I was just 15. I took some pencils and made a portrait. Damn! It felt so good. Creating
                        something gave me that sense of confidence and happiness that I was longing for so long. It was
                        like a ray of happiness in my dark times. I started drawing more and more. It kept me busy and
                        engaged. That gave me peace from my overthinking brain. Till now I was drawing just for myself.
                        Used to upload my drawings on my personal Facebook account which had some school friends and
                        relatives. That was it. Had no competition or motivation.<br>
                        Till now I was on my own. Then came a turning point in my life when I came across an artist’s
                        page on Facebook. It had a lot of likes. I went through the page and found a lot of news
                        articles and celebrity comments. I was so awestruck. I wanted that! I so badly wanted that!
                        <a class="aboutSwitch fa-solid fa-chevron-right" onclick="switchAboutSection(this,true);"></a>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                         So I
                        made a Facebook page and a Twitter account for my work and started uploading regularly. I made a
                        lot of celebrity portraits. I proceeded to create an account on Instagram. I was new to the
                        platform. I found Instagram perfect for reaching out to more people. Then with some celebrity
                        likes and comments, my account started growing gradually. It was hard to get such an instant
                        response on Facebook. I came across a lot of brilliant artists. I was blown away by their work
                        and that motivated me to work more on my skills. Every new drawing used to be a new
                        rollercoaster ride of excitement and challenge.
                        <a class="aboutSwitch fa-solid fa-chevron-right" onclick="switchAboutSection(this,true);"></a>
                        <a class="aboutSwitch fa-solid fa-chevron-left" onclick="switchAboutSection(this,false);"></a>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                        I failed innumerable times when what I created either did not meet my expectations or failed to
                        gain attention online. I was still a kid at that time and the curiosity and enthusiasm of the
                        age helped me a lot to build a base.
                        So with the new transitions happening in my life and drawing becoming an inseparable part of it,
                        I cleared my 10th board
                        examination in 2016.
                        The school was over now and considering all the trouble that I had to go through because of low
                        attendance, I did not
                        want to take regular classes. I wanted to focus on drawing. I had no other dreams in my life. So
                        keeping these things in
                        my mind, I went for the commerce stream with a non-attending mode of education. For two years I
                        kept drawing and working
                        on my skills.
                        <a class="aboutSwitch fa-solid fa-chevron-right" onclick="switchAboutSection(this,true);"></a>
                        <a class="aboutSwitch fa-solid fa-chevron-left" onclick="switchAboutSection(this,false);"></a>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                        I focused entirely on drawing and did self-study to prepare for my exams. Commerce was an
                        unfamiliar subject for me so
                        it took a little extra to understand the basics as I was all on my own. But still, I managed to
                        do it along with drawing
                        as I kept myself away from all other sorts of distractions.

                        I started getting requests online from people to draw their pictures. This gave me an idea of
                        how I can turn my hobby
                        into a profession.
                        <a class="aboutSwitch fa-solid fa-chevron-left" onclick="switchAboutSection(this,false);"></a>
                    </div>
                </div>
                <div class="paperstack tabbed" >
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Branding</div>
                </div>
                <div class="paperstack " >
                    <div class="aboutSection slideShow" tabindex="0">
                        My system of uploading drawings on Insta was quite intuitive and random. My profile lacked
                        uniformity. The feed looked messy and unorganized. I knew I was not going to survive for long on
                        social media without creating a strong presence. So I decided to turn ‘Shreya5art’ into a brand.
                        I took professional help and got myself a logo. I started clicking pictures of my drawings more
                        aesthetically with proper logo presentation. This added a professional touch to my profile and
                        now I was a brand.
                        <button class="button" onclick="switchAboutSection(this,true);">Next</button>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                        So finally I completed my 12th in 2018. I started accepting personalized orders for drawing. I
                        did a lot of such order works along with some celebrity portraits to keep my page alive on Insta
                        and attract more people to my profile. Results were announced and now it was time for a tough
                        decision. What to do next?
                        I gave an entrance test for a reputed college to pursue my bachelor's degree in commerce. I even
                        got selected but deep down inside I knew if I started attending college, giving time to drawing
                        would become impossible. So I decided to go for distance education. I got into IGNOU (Indira
                        Gandhi National Open University). This time also I went for self-study and kept my entire focus
                        on drawing.
                        <button class="button" onclick="switchAboutSection(this, false);">Prev</button>
                    </div>
                </div>
                <div class="paperstack tabbed" >
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Colors</div>
                </div>
                <div class="paperstack ">
                    <div class="aboutSection slideShow" tabindex="0">
                        After working with graphite and charcoal for about 4-5 years, I decided to diversify my
                        portfolio and add a
                        new medium to my skill set. I researched and asked a lot of other artists and finally crossed my
                        mind to go
                        for Faber Castell Polychromos. I ordered 60 shades set as the full set of 120 shades was quite
                        expensive for
                        me. I was nervous. Made my first color drawing in October 2019. It took me more than 15 days as
                        I made each
                        and every stroke very consciously. But with this drawing my fear of colors took a backseat and
                        confidence
                        started building
                        <button class="button" onclick="switchAboutSection(this,true);">Next</button>
                    </div>
                    <div class="aboutSection slideShow" tabindex="0">
                        In January 2020 I made my first portrait using colored pencils. It was a celeb portrait and the
                        response I
                        got was overwhelming. My interest in drawing started building again. I made a lot of portraits
                        with both
                        color and graphite medium.
                        I would say 2020 was a great year for me. My account grew so much. Got a lot of celebrity
                        reposts and
                        comments. This brought me into the limelight.
                        <button class="button" onclick="switchAboutSection(this, false);">Prev</button>
                    </div>


                </div>
                <div class="paperstack tabbed" >
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Brand Collab</div>
                </div>
                <div class="paperstack " >
                    <div class="aboutSection slideShow" tabindex="0">
                        I got this amazing opportunity to collab with a brand like Derwent. My whole 2021 was about this dream
            collab. Made more than 20 drawings for Derwent along with some order works. In June I gave my final year
            examination for my bachelor's degree course. The result Was yet to come and I continued my collab. This year
            I got to try a lot of new mediums. It helped me to work with a fresh perspective. I was overworked towards
            the end of the year and exhausted. My schedule got messed up because of a lot of personal and professional
            reasons.
                    </div>
                </div>
                <div class="paperstack tabbed" >
                    <div class="tab about aboutTab" onclick="activateAboutTab(this);">Aspirations</div>
                </div>
                <div class="paperstack " >
                    <div class="aboutSection slideShow" tabindex="0">
                        Results were announced in 2022 and this way I completed my Graduation. I didn’t want to continue with the
            commerce stream. I decided now to officially turn into a full-time artist.

            Aspirations
            Anything that has happened till now, I didn’t plan any of it. I just kept doing what I liked honestly and
            opportunities kept coming. So, like always I don’t have any detailed plan of what I am gonna do. Just some
            checklists to tick before I leave the world
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div id="home" class="mainContainer row" style="">
        <div class="homeTop" style="">
            <div class="col main">
                <div class="notebook homeNotebook col">
                    <div class="paperstack artworkPage spiral col">
                        <h2 style="margin-left: 5px;">My Artworks</h2>
                        <div class="artworkBox compact">
                            <div class="thumbnail" style=" width: 175px; background-image: url(files/img/1.jpg);"></div>
                            <div class="thumbnail" style=" width: 100px; background-image: url(files/img/2.jpg);"></div>
                            <div class="thumbnail" style=" width: 100px; background-image: url(files/img/3.jpg);"></div>
                            <div class="thumbnail" style=" width: 175px; background-image: url(files/img/1.jpg);"></div>
                        </div>
                        <div class="buttonBox" style="text-align-last: left; text-indent: 5px;">
                            <a href="#gallery" class="button colored"> See More Artworks </a>

                        </div>
                    </div>
                    <div class="paperstack artworkPage spiral col">
                        <div class="dp"></div>
                        <h2 style="display: inline-block; font-size: 1.25em; margin-top: 70px; margin-bottom: 10px;">Hello,</h2>
                        <p style="color: rgb(84, 84, 84);">Welcome to my website. I am Shreya, a full-time artist based in Bihar, India. I specialise in graphite, charcoal and colour pencil medium. My style is realism. I am very passionate about what I do and aspire to achieve many more milestones.</p>
                        <div class="buttonBox" style="text-align-last: right;">
                            <a href="#about" class="button colored"> More About Me </a>


                        </div>
                    </div>
                </div>
            </div>
            <div class="smartphone col single">
                <h3 >Get Customized <br>Artwork</h4>

                    <div style="margin-top: 2em;margin-bottom: 2em;">
                        <img class="polaroid" style="width: 100px;" src="files/img/reference.jpg" />
                        <img class="polaroid" style="width: 80px;" src="files/img/order1.jpg" />
                    </div>

                    <p style="font-size: .8em; padding: 0 1em;">
                        A memorable gift for yourself or your loved ones, handmade with love
                    </p>
                    <p style="font-size: 1.1em;">
                        Starting at $40
                    </p>

                    <a href="#order" class="button colored" style="margin-top: .8em;">Place Order Now</a>
            </div>

            <div class="col card instagram single homeExtra">
                <div class="instagramStats">
                    <div class="dp"></div>
                    <div class="stat instaStat">
                        <span class="value">271</span>
                        <span class="title">Posts</span>
                    </div>
                    <div class="stat instaStat">
                        <span class="value">30.9k</span>
                        <span class="title">Followers</span>
                    </div>
                    <div class="stat instaStat">
                        <span class="value">950</span>
                        <span class="title">Following</span>
                    </div>
                </div>
                <div class="instagramBio">
                    <P class="name">Shreya5art™ | Artist</P>
                    <P class="desig">Artist</P>
                    <P class="bio">A Self taught artist from Bihar, India 🇮🇳<br />
                        22 y/o 👧<br />
                        📥DM/Mail to place Order for Custom drawing 🎁<br />
                        #artist #art #bihar #sketch #portrait</p>
                </div>
                <div class="instagramFollow">
                    <a href="https://shreya5art.in/shreya5art" class="button instaFollowButton fa-brands fa-instagram"><span>Follow me on<br>Instagram</span></a>
                </div>

            </div>
            <div class="contactCard col single homeExtra">
                <div class="col shadow"></div>
                <div class="col cardFace shadow">
                    <h2>Shreya</h2>
                    <span>Artist</span>
                    <hr>
                    <a>shreyafiveart@gmail.com</a>
                    <a>www.shreya5art.in</a>
                    <div class="socialMediaIcons">
                        <a class="fa-brands fa-instagram"></a>
                        <a class="fa-brands fa-facebook"></a>
                        <a class="fa-brands fa-twitter"></a>
                        <a class="fa-brands fa-whatsapp"></a>
                        <a class="fa-brands fa-telegram"></a>

                        <span> / shreya5art</span>
                    </div>
                </div>
            </div>
            <div class="reviewEnvelope col single homeExtra">

                <div class="review col slideShow shadow" tabindex="0">
                    <div class="thumbnailBox">
                        <span class="thumbnail"></span>
                        <span class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </span>
                        <date class="date">09/12/2022</date>
                    </div>
                    <div class="reviewBox">
                        <p>Awesome Drawing and Packaging. Really loved it.</p>
                        <p style="text-align: right;">
                            - Ayush Raj <br> Patna, Bihar, India
                        </p>
                    </div>
                </div>

                <div class="review col slideShow shadow" tabindex="0">
                    <div class="thumbnailBox">
                        <span class="thumbnail"></span>
                        <span class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </span>
                        <date class="date">09/12/2022</date>
                    </div>
                    <div class="reviewBox">
                        <p>Awesome Drawing and Packaging. Really loved it.</p>
                        <p style="text-align: right;">
                            - Ayush Raj <br> Patna, Bihar, India
                        </p>
                    </div>
                </div>
                <div class="review col slideShow shadow" tabindex="0">
                    <div class="thumbnailBox">
                        <span class="thumbnail"></span>
                        <span class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </span>
                        <date class="date">09/12/2022</date>
                    </div>
                    <div class="reviewBox">
                        <p>Awesome Drawing and Packaging. Really loved it.</p>
                        <p style="text-align: right;">
                            - Ayush Raj <br> Patna, Bihar, India
                        </p>
                    </div>
                </div>

                <a href="reviews">See All Reviews</a>
            </div>

        </div>
        <div class="row homeSections">

            <h3>Youtube Videos</h3>
            <a class="youtubeVid fa-brands fa-youtube" href="https://youtube.com/watch?v=lXHn07RDvGM"
                style=" background-image: url(https://img.youtube.com/vi/lXHn07RDvGM/sddefault.jpg);">
            </a>
            <a class="youtubeVid fa-brands fa-youtube" href="https://youtube.com/watch?v=CZT7PHv-gUk"
                style=" background-image: url(https://img.youtube.com/vi/CZT7PHv-gUk/sddefault.jpg);">
            </a>
            <a class="youtubeVid fa-brands fa-youtube" href="https://youtube.com/watch?v=aUOh48m8TRI"
                style=" background-image: url(https://img.youtube.com/vi/aUOh48m8TRI/sddefault.jpg);">
            </a>
            <!--<a class="youtubeVid fa-brands fa-youtube" href="https://youtube.com/watch?v=oNeYNCFiB-A"  style=" background-image: url(https://img.youtube.com/vi/oNeYNCFiB-A/sddefault.jpg);" >
                    </a> -->
            <!--<iframe class="youtubeVid" width="250" height="180"
                        src="https://www.youtube.com/embed/lXHn07RDvGM?autoplay=0&mute=1">
                    </iframe>
                    <iframe class="youtubeVid" width="250" height="180"
                        src="https://www.youtube.com/embed/CZT7PHv-gUk?autoplay=0&mute=1">
                    </iframe>
                    <iframe class="youtubeVid" width="250" height="180"
                        src="https://www.youtube.com/embed/aUOh48m8TRI?autoplay=0&mute=1">
                    </iframe>
                    <iframe class="youtubeVid" width="250" height="180"
                        src="https://www.youtube.com/embed/oNeYNCFiB-A?autoplay=0&mute=1">
                    </iframe>-->
            <a class="youtubeVid seeMore  fa-brands fa-youtube" href="https://youtube.com/shreya5art">

            </a>


        </div>
        <div class="row homeSections">
<!--
            <h3>Tools I Use</h3>
            <a class="amazonItem"
                href="https://www.amazon.in/dp/B09RZRQ4VV?asc_item-id=amzn1.ideas.1BHS79H7CENXO&linkCode=li2&tag=shreya0035-21&linkId=93af7e4a07f9a90b30be679aa15936d5&language=en_IN&ref_=as_li_ss_il"
                target="_blank">
                <span>Isomars A2 Model Drawing Drafting Board Technical Table (18.5"x25.5")</span>
                <img border="0"
                    src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09RZRQ4VV&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=shreya0035-21&language=en_IN">

            </a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=shreya0035-21&language=en_IN&l=li2&o=31&a=B09RZRQ4VV"
                width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <a class="amazonItem"
                href="https://www.amazon.in/dp/B000C6RHBW?asc_item-id=amzn1.ideas.1BHS79H7CENXO&linkCode=li2&tag=shreya0035-21&linkId=7d2efd310eaa115c7f749c4a2abf3a9a&language=en_IN&ref_=as_li_ss_il"
                target="_blank">
                <span>Faber-Castell Polychromos Color Pencil Set - Pack of 60</span>
                <img border="0"
                    src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B000C6RHBW&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=shreya0035-21&language=en_IN">
            </a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=shreya0035-21&language=en_IN&l=li2&o=31&a=B000C6RHBW"
                width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a class="amazonItem"
                href="https://www.amazon.in/dp/B08LZMGZQK?asc_item-id=amzn1.ideas.1BHS79H7CENXO&linkCode=li2&tag=shreya0035-21&linkId=8e99c912794874da45331449b8e0cfc5&language=en_IN&ref_=as_li_ss_il"
                target="_blank">
                <span>Brustro Drawing Paper A4 Size, Pack, 200 GSM (Pack of 20 + 4 Sheets) Pack </span>
                <img border="0"
                    src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08LZMGZQK&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=shreya0035-21&language=en_IN">
            </a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=shreya0035-21&language=en_IN&l=li2&o=31&a=B08LZMGZQK"
                width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a class="amazonItem"
                href="https://www.amazon.in/dp/B08R7PC9LD?asc_item-id=amzn1.ideas.1BHS79H7CENXO&linkCode=li2&tag=shreya0035-21&linkId=e9cecb5840ae933518e2e95164e87a4c&language=en_IN&ref_=as_li_ss_il"
                target="_blank">
                <span>Derwent Chromaflow Colour Pencils (Tin of 24) </span>
                <img border="0"
                    src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B08R7PC9LD&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=shreya0035-21&language=en_IN">
            </a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=shreya0035-21&language=en_IN&l=li2&o=31&a=B08R7PC9LD"
                width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

            <a class="amazonItem seeMore  fa-brands fa-amazon" href="https://amazon.in/shop/shreya5art">

            </a>
        -->

        </div>
    </div>
    <div id="order" class="mainContainer row ">
        <h1 style="text-align: center;">Order Personalized Artwork</h1>
        <div class="col main orderBox left" style="padding: 5px; text-align: left; max-width: 500px;">

            <div class="artworkCollage" style="text-align: center; margin: 4em 0;">
                <img class="polaroid" src="files/img/1.jpg" />
                <img class="polaroid" src="files/img/2.jpg" />
                <img class="polaroid" src="files/img/3.jpg" />
                <img class="polaroid" src="files/img/4.jpg" />
                <img class="polaroid" src="files/img/5.jpg" />
                <img class="polaroid" src="files/img/6.jpg" />
            </div>
            <p>Starting @ 40$<br><br>

                Each Drawing is hand made to perfection with love.
                A nice gift for your loved ones or yourself :)</p>
            <div class="buttonBox">
                <button class="button colored">Order Now</button>
                <button class="button">See More Samples</button>
            </div>



        </div>

        <div class="col right" style="z-index: 2;">
            <dialog class="orderDialog">
                <div class="orderFrame">
                    <div class="orderPreview">
                        <span class="size width">8 inch</span>
                        <span class="size height">11 inch</span>
                    </div>
                </div>
                <div class="col" style="margin-top: 1.5em;">
                    <label class="label order">
                        <span>Size</span>
                        <div class="input">
                            <select>
                                <option>A2 <small>8.2 * 11.6 in</small></option>
                                <option>A3 <small>8.2 * 11.6 in</small></option>
                                <option>A4 <small>8.2 * 11.6 in</small></option>
                                <option>A5 <small>8.2 * 11.6 in</small></option>
                            </select>
                        </div>

                    </label>
                    <label class="label order">
                        <span>Medium</span>
                        <div class="input">
                            <select>
                                <option>Graphite<small>Pencil</small></option>
                                <option>Color<small>Pencil</small></option>
                            </select>
                        </div>

                    </label>
                    <label class="label order">
                        <span>Face</span>
                        <div class="input">
                            <select>
                                <option>Single</option>
                                <option>Couple </option>
                                <option>Family <small>upto 4</small></option>
                                <option>Group <small>more than 5</small></option>
                            </select>
                        </div>
                    </label>
                    <label class="label order">
                        <span>Background</span>
                        <div class="input">
                            <select>
                                <option>No Background </option>
                                <option>Bokeh </option>
                                <option>Same as Picture </option>
                                <option>Custom <small>upload</small></option>
                            </select>
                        </div>

                    </label>
                    <label class="label order">
                        <span>Frame</span>
                        <div class="input">
                            <select>
                                <option>No Frame </option>
                                <option>Frame <small>Select in order</small> </option>
                            </select>
                        </div>
                    </label>
                </div>
                <div class="row label">
                    <span>Upload</span>
                    <div class="input">
                        <label class="uploadBar">
                            <i class="fa-solid fa-cloud-arrow-up"></i>
                            <p>Upload upto 10 images only.</p>
                            <input type="file">
                        </label>
                        <div class="orderUploadImage col">
                            <i class="fa-solid fa-trash"></i>
                            <div class="thumbnail"></div>
                            <span>Photo1.jpg</span><br>
                            <span>1.3 mb</span>
                            <input type="file" />
                        </div>
                        <div class="orderUploadImage col">
                            <i class="fa-solid fa-trash"></i>
                            <div class="thumbnail"></div>
                            <span>Photo1.jpg</span><br>
                            <span>1.3 mb</span>
                            <input type="file" />
                        </div>
                        <div class="orderUploadImage col">
                            <i class="fa-solid fa-trash"></i>
                            <div class="thumbnail"></div>
                            <span>Photo1.jpg</span><br>
                            <span>1.3 mb</span>
                            <input type="file" />
                        </div>
                        <div class="orderUploadImage col">
                            <i class="fa-solid fa-trash"></i>
                            <div class="thumbnail"></div>
                            <span>Photo1.jpg</span><br>
                            <span>1.3 mb</span>
                            <input type="file" />
                        </div>
                    </div>

                </div>

                <div class=" label row">
                    <span>Privacy</span>
                    <div class="input">
                        <div>
                            <select>
                                <option>Level 0</option>
                            </select>
                            <select>
                                <option>Level 0</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div class="label row">
                    <span>Instructions</span>
                    <div class="input">
                        <textarea placeholder="Add Instructions for drawing here ( optional )"></textarea>
                    </div>
                </div>
                <div class="row">
                    Estimated Price : $100
                </div>
                <div class="row " style="text-align: left;">
                    <input type="checkbox" />I agree to the t&c and privacy policy.
                </div>
                <div class="row">
                    <button class="button">Cancel</button>
                    <button class="button">Place Order</button>
                </div>

            </dialog>
            <h3
                style="display: inline-block;max-width: auto; margin: 1em auto; border-bottom: solid gray 2px; padding: 1em;">
                Price Calculator</h3>
            <form id="priceCalc" class="smartphone priceCalculator" onchange="priceCalculator(this);">
                <div class="orderFrame">
                    <div class="orderPreview">
                        <span class="size width orderWidth">8 inch</span>
                        <span class="size height orderHeight">11 inch</span>
                    </div>
                </div>
                <label class="label order">
                    <span>Size</span>
                    <div class="input">
                        <select id="size" name="size">
                            <option value="A2">A2 <small>8.2 * 11.6 in</small></option>
                            <option value="A3">A3 <small>8.2 * 11.6 in</small></option>
                            <option value="11x14">11 x 14 inch</option>
                            <option value="9x12">9 x 12 inch</option>
                            <option value="A4">A4 <small>8.2 * 11.6 in</small></option>
                            <option value="A5">A5 <small>8.2 * 11.6 in</small></option>
                        </select>
                    </div>

                </label>
                <label class="label order">
                    <span>Medium</span>
                    <div class="input">
                        <select name="medium">
                            <option value="graphite">Graphite<small>Pencil</small></option>
                            <option value="color">Color<small>Pencil</small></option>
                            <option value="mix">Mix Medium</option>
                        </select>
                    </div>

                </label>
                <label class="label order">
                    <span>Face</span>
                    <div class="input">
                        <select name="face">
                            <option value="single">Single</option>
                            <option value="couple">Couple <small>2 faces</small></option>
                            <option value="family">Family <small>upto 4 faces</small></option>
                            <option value="group">Group <small>more than 5</small></option>
                        </select>
                    </div>
                </label>
                <label class="label order">
                    <span>Background</span>
                    <div class="input">
                        <select name="background">
                            <option value="noBg">No Background </option>
                            <option value="bokeh">Bokeh </option>
                            <option value="sameAsPic">Same as Picture </option>
                            <option value="custom">Custom <small>upload</small></option>
                        </select>
                    </div>

                </label>
                <label class="label order">
                    <span>Frame</span>
                    <div class="input">
                        <select name="frame">
                            <option value="noFrame">No Frame </option>
                            <option value="frame">Frame <small>Select in order</small> </option>
                        </select>
                    </div>
                </label>

                <span class="priceEstimate" style="display: inline-block; margin-top: 2em;">Estimated Price : <span
                        id="" class="price estimatedPrice">4000</span></span>
                <button class="button" style="margin-top: 1em;">Place Order</button>
            </form>
        </div>

        <div class="row" style=" clear: both;">
            <h3>Reviews</h3>
            <div class="review col  shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div class="review col  shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>

            <div class="review col shadow" tabindex="0">
                <div class="thumbnailBox">
                    <span class="thumbnail"></span>
                    <span class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <date class="date">09/12/2022</date>
                </div>
                <div class="reviewBox">
                    <p>Awesome Drawing and Packaging. Really loved it.</p>
                    <p style="text-align: right;">
                        - Ayush Raj <br> Patna, Bihar, India
                    </p>
                </div>
            </div>
            <div style="padding: 2em;">
                <a class="button">See More Reviews</a>
            </div>

        </div>

        <div class="section row extendedSection" style="background-color: whitesmoke;">
            <h3>Order Journey</h3>

            <div class="col journey">
                <img src="files/res/journey/order.svg" class="journeyImg" />
                <span>1. Place Order</span>
                <span class="extra">Upload Images and instructions</span>
            </div>

            <div class="col journey">
                <img src="files/res/journey/confirmed.svg" class="journeyImg" />
                <span>2. Order Confirmed</span>
                <span class="extra">Advance Payment</span>
            </div>
            <div class="col journey">
                <img src="files/res/journey/drawing.svg" class="journeyImg" />
                <span>3. Drawing</span>
                <span class="extra">Takes around 1 week for A4 Size</span>
            </div>
            <div class="col journey">
                <img src="files/res/journey/payment.svg" class="journeyImg" />
                <span>4. Final Payment</span>
                <span class="extra">Pay after preview of drawing</span>
            </div>
            <div class="col journey">
                <img src="files/res/journey/ship.svg" class="journeyImg" />
                <span>5. Shipped</span>
                <span class="extra">Takes around 1week in India</span>
            </div>

            <!-- 
            <div class="col journey">
                <div class="icon">
                    <i class="fa-solid fa-camera"></i>
                    <i class="fa-solid fa-cloud-arrow-up"></i>
                </div>
            </div>
            <div class="col journey">
                <div class="icon">
                    <i class="fa-regular fa-image"></i>
                    <i class="fa-solid fa-circle-check"></i>
                </div>
            </div>
            <div class="col journey">
                <div class="icon ">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <i class="fa-solid fa-certificate payment half"></i>
                </div>
            </div>
            <div class="col journey">
                <div class="icon">
                    <i class="fa-solid fa-square"></i>
                    <i class="fa-solid fa-paintbrush"></i>
                </div>
            </div>
            <div class="col journey">
                <div class="icon ">
                    <i class="fa-solid fa-sack-dollar"></i>
                    <i class="fa-solid fa-certificate payment full"></i>
                </div>
            </div>
            <div class="col journey">
                <div class="icon">
                    <i class="fa-solid fa-truck-fast"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
            </div>-->
        </div>
        <div class="row extendedSection" style="max-width: 600px;">
            <h3>Frequently Asked Questions</h3>
            <div class="faq" tabindex="0">
                <p class="question">Where is my money?</p>
                <p class="answer">In the banks and probably some chillars in your wallet</p>
            </div>
            <div class="faq" tabindex="0">
                <p class="question">What is the refund process?</p>
                <p class="answer">If cancelled during “order in review/queue” , full refund; After “order in progress”
                    or “order completion”,
                    20% of the full amount to the payment method used.</p>
            </div>
            <div class="faq" tabindex="0">
                <p class="question">What are payment modes are available ? COD ?</p>
                <p class="answer">Cash on delivery, accepted payment modes, your privacy is your choice, Order in
                    review, estimated
                    time or delay in order as promised, damaged product etc etc</p>
            </div>
            <button class="button" style="padding: 1em 2em; margin-top: 2em;">More</button>
        </div>
    </div>


    <div id="footer" class="extendedSection row" style="max-width: 700px;">
        <div style="text-align: justify; text-align-last: justify;">
            <div class="stats">
                <div class="stat">
                    <span class="title">Artworks</span>
                    <span class="value">100</span>
                </div>
                <div class="stat">
                    <span class="title">Orders</span>
                    <span class="value">50</span>
                </div>
                <div class="stat">
                    <span class="title">Avg Rating</span>
                    <span class="value">4.5</span>
                </div>
                <div class="stat">
                    <span class="title">Happy Clients</span>
                    <span class="value">98%</span>
                </div>
            </div>
        </div>
        <div style="text-align: justify; text-align-last: justify; padding: 1em">
            <nav class="footerNav">
                <a>Gallery</a>
                <a>Buy Prints</a>
                <a>Graphite Artworks</a>
                <a>Color Artworks</a>
            </nav>
            <nav class="footerNav">
                <a>Order</a>
                <a>Track</a>
                <a>Reviews</a>
                <a>FAQs</a>
            </nav>
            <nav class="footerNav">
                <a>Blog</a>
                <a>Tools</a>
                <a>About</a>
                <a>Contact</a>
            </nav>
            <nav class="footerNav" style="text-align: right;">
                <a>T & C</a>
                <a>Privacy Policy</a>
                <a>Advertise</a>
                <a>Collaborate</a>
            </nav>
            <nav class="footerNav" style="text-align: right;">
                <a>Instagram</a>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Youtube</a>
            </nav>
        </div>

        <p>
            <a style="display: inline-block;text-align-last: center;">© Shreya5art 2015-2023 | All Rights Reserved</a>
        </p>
        <p>
            <a style="display: inline-block;text-align-last: center;">Developed by Trijyas.in</a>
        </p>

    </div>

    

    <script>
        var base = document.createElement('base');
        console.log(window.location.protocol + window.location.pathname);
        if (window.location.protocol.includes("file")) {
            console.log("File");
            base.href = "file:///Users/ar4j.in/Desktop/shreya5art.github.io/";
        } else {
            base.href = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }

        document.getElementsByTagName('head')[0].appendChild(base);
    </script>


    <script src="https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.13.0/firebase-auth-compat.js"></script> // ADD THIS
    <script src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js"></script>
    <link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />
    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
        import { getAuth } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" // ADD THIS
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCtdve-VKKuXPONoiZ3u8TT0oaCaJhJbMc",
            authDomain: "shreya5art.firebaseapp.com",
            databaseURL: "https://shreya5art.firebaseio.com",
            projectId: "shreya5art",
            storageBucket: "shreya5art.appspot.com",
            messagingSenderId: "98104959550",
            appId: "1:98104959550:web:423a38ec52d5cd16cfa76f"
        };

        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app) // ADD THIS
        const analytics = getAnalytics(app);

        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: 'https://www.syllabuzz.in/',
            // tosUrl and privacyPolicyUrl accept either url string or a callback
            // function.
            // Terms of service url/callback.
            tosUrl: 'https://www.syllabuzz.in/',
            // Privacy policy url/callback.
            privacyPolicyUrl: function () {
                window.location.assign('https://www.syllabuzz.in/');
            }
        };
        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(auth); // CHANGE THIS
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Other config options...
        })  
    </script>


</body>




</html>