#**Frontend** - _**(Techiankali)**_
![Techiankali](files/static/regular-images/techiankali-logo.jpg?raw=true)


##**1) Installing Dependencies**
From the root folder
````
techiankali
````
Execute the following command to download the required dependencies for the project:
>**NOTE:** **Node.js** & **NPM** are required to download the libraries and execute the project, make sure to have those installed before continue.
````
npm install
````
The previous command should have created the folder with the respective dependencies: 
````
"node_modules"
  |_
    Dependency 1
    Dependency 2
        ...
````



###**2) Project Images**
The Build process requires **"GraphicsMagick"** in order to generate the images, make sure to install this library:
* **MacOS:** 

Execute the following command
````
brew install graphicsmagick
````
* **Windows:**

Download the `.exe` that is compatible with your OS from the following url:
````
ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/
````

Finally in order to generate the project's images `(responsives & sprites)`  execute the command:

````
npm run create-dynamic-images
````



##**3) Executing the Project**
With all the dependencies installed, we can build the project by triggering the command below for the respective environment:

**Development - `(watchers & development server enabled)`**
````
npm run start-development-server
````
>**NOTE:** Spawn a development server with HRM enabled that re-compiles the source in less than 2 seconds, provides source maps and lint feedback. The CSS will be injected dynamically from the script only for development purposes.
           Index will be server with `base: '/'`.

**Production - `(watchers & production server enabled)`**
````
npm run start-production-server
````
>**NOTE:** Spawn a production server that simulates the bundle that will be served in production, this should be executed only to validate the final bundle before deploy the application.
           Index will be server with `base: '/'`,


##**4) Building the Project for Deployment**
The final bundle will be located in a folder called `dist`:

**Development Bundle**
````
npm run build-for-development
````
>**NOTE:** This bundle is only for development servers.

**Production Bundle**
````
npm run build-for-production
````
>**NOTE:** Optimized bundle for production servers.



##**➥ Misc**
###**Updating the Project Dependencies**
To fetch and install the latest versions of the dependencies used in the project, execute:
````
npm update 'dependency-name'
````
>**IMPORTANT:** Make sure after verify if the project is stable to mark this dependency as the new minimum version in the **package.json** for all the updated dependencies.


###**Placing Files and Understanding Project Structure**
The build process will manage the static files, it will copy or process and transform the assets based on where were placed in the
project directory, list of the supported assets:

* **Static files (no processing required)**

    * _**PDF**_ - Should be placed in `"files/static/pdf"` folder.
    
    * _**JSON**_ - Should be placed in `"files/static/json"` folder and required in the app using the `"StaticJSON"` Service.
    
    * _**Server Specific & Root Control Files**_ - Should be placed in `"files/static/server-root"`, these files will be placed at the root of mounting directory.
    
    * _**Images**_ - Static images should be placed in `"files/static/regular-imgages"`, these images will be server as they were uploaded.
    
    * _**Fonts**_ - There are currently 3 fonts installed as static, **DO NOT** include more fonts in this directory, these files will be removed in the future, if you need to include a new font, import and manage it accordingly from `"node_modules/my-dependency-with-font"`
                    using `.scss` features or a `Webpack` loader.
    
    * _**Sprites**_ - Should be placed in `"files/static/sprite-images"` please read the **Sprites** section for more information on how to use them in the code.
    
    * _**Responsive Images**_ - Should be placed in `"files/static/responsive-images"` please read the **Responsive Images** section for more information.

###**Sprites**
You can dynamically generate sprites for the website, as soon as you include another image and executed `npm run create-dynamic-images` it will generate the new sprite and extend the css rules to make it available for the application.

* #####**Placing the image**
  The image(s) that will be merged into the generated sprite has to placed in `"files/static/sprite-images"` where will be resized and merged as part of the final sprite.

* #####Naming convention for Sprites to enable `hover`.
  If you need to have another image for the hover state, append at the end of the file name **"_hover"**, the file name should match the image's name for the normal state.
  ```
  my-image.png
  my-image_hover.png
  ```
  
  >**NOTE:** In this example, the image of the element will be "my-image.png" and when the user hovers over the element, it will be replaced with "my-image_hover.png" using a CSS rule, make sure the dimensions are matching between the two images in the source.

* #####**Additional Image Size**
  Since sprites will not be dynamically resized, every image included to be bundled as a sprite will be scaled down from 100% (original source) to 10%, if you need the same image but smaller, you can use any other option.
  
  ````
  my-image.jpg
  ````
  Will generate the following output file: `[file-name]-[scale-percentage].[ext] `
  ````
  my-image-100.jpg
  my-image-90.jpg
  my-image-80.jpg
  my-image-70.jpg
  my-image-60.jpg
  my-image-50.jpg
  my-image-40.jpg
  my-image-30.jpg
  my-image-20.jpg
  my-image-10.jpg
  ````
  And the resulting files will be included in the sprite to enable multiple size icons.
  
  >NOTE: If you need to remove or add more percentages break points, update the array `SPRITE_IMAGES` in `config_gulp/app-paths/index.js` file.

* #####**Referencing a sprites in the markup**
  You can include the sprite by setting the class of an element with the prefix `"icon-"` and the corresponding file name with the desired percentage.
  
  ````
  <div class="icon-my-image-100"></div>
  ````
  
* #####**Generated files**
    You can find the generated assets from the sprite process in `"files/generated/sprite-images/output"`, 2 files should be present in this directory `"sprite.css"` & `"sprite.png"`.
    >**NOTE:** The build process will fetch `sprite.png` from this location and `sprite.css` is being imported by `src/scss/styles.scss`, **DO NOT REMOVE** the files from this location.
  
###Responsive Images
The website will use a component called `"<ResponsiveImage />"` which will fetch a specific image based on screen's device width, the build process will generate all the required assets to support multiple devices _(see section - Supported Breakpoints)_ for each image stored in `"files/static/responsive-images"`.
>**IMPORTANT:** The source file should have as the maximum width: 2560px that will be considered for _Retina Display_.

Assuming we include `my-hero-image.jpg` in `"files/static/responsive-images"` this will generate and include the following corresponding assets for the website in `"files/generated/responsive-images"`:

````
"my-hero-image-xs.jpg"          
"my-hero-image-Android.jpg"      
"my-hero-image-iPhone6.jpg"      
"my-hero-image-Nexus4.jpg"       
"my-hero-image-Nexus6.jpg"       
"my-hero-image-iPhone6Plus.jpg"  
"my-hero-image-iPhone4L.jpg"     
"my-hero-image-Nokia.jpg"        
"my-hero-image-iPhone5L.jpg"     
"my-hero-image-Nexus7.jpg"       
"my-hero-image-AndroidL.jpg"     
"my-hero-image-iPhone6L.jpg"     
"my-hero-image-Nexus6L.jpg"    
"my-hero-image-iPhone6PlusL.jpg" 
"my-hero-image-sm.jpg"           
"my-hero-image-md.jpg"           
"my-hero-image-iPadL.jpg"        
"my-hero-image-lg.jpg"           
"my-hero-image-Nexus10.jpg"      
"my-hero-image-HiDPILaptop.jpg"  
"my-hero-image-KindleFireHDX.jpg"
"my-hero-image-Desktop.jpg"      
"my-hero-image-Retina.jpg"       
````


#####**Supported Breakpoints**
````
    |     Width    |                  Device                  |
    | ------------ | -----------------------------------------|
    | 320 px       | iPhone 4, iPhone 5, Nokia Lumia 520      |
    | 360 px       | Android, Windows                         |
    | 375 px       | iPhone 6                                 |
    | 384 px       | LG Optimus, Nexus 4                      |
    | 412 px       | Nexus 6, Nexus 6P                        |
    | 414 px       | iPhone 6 Plus                            |
    | 480 px       | iPhone 4 Landscape                       |
    | 533 px       | Nokia Lumia 520                          |
    | 568 px       | iPhone 5 Landscape                       |
    | 600 px       | Blackberry Playbook & Nexus 7            |
    | 640 px       | Android (Landscape), Windows (Landscape) |
    | 667 px       | iPhone 6 (Landscape)                     |
    | 732 px       | Nexus 6, Nexus 5x,  Nexus 6P             |
    | 736 px       | iPhone 6 Plus (Landscape)                |
    | 768 px       | iPad, iPad Mini, Bootstrap sm Breakpoint |
    | 992 px       | Bootstrap md Breakpoint                  |
    | 1024 px      | iPad (Landscape)                         |
    | 1200 px      | Bootstrap lg Breakpoint                  |
    | 1280 px      | Nexus 10, MDPI Laptop                    |
    | 1440 px      | HiDPI (Retina) Laptop,                   |
    | 1600 px      | Kindle Fire HDX, MDPI Desktop            |
    | 1920 px      | 1080p Desktop                            |
    | 2560 px      | HiDPI (Retina) Desktop                   |
    | 2560 px      | Desktop - Non Responsive (Original File) |    
````
###**Extending the Source Code**
.


###**Todo**
 * .
