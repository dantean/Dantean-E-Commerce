# E-Commerce backend

## What is it?

A backend database utilizing MySQL2 and Sequelize to function as a product management system for an e-commerce style website. 

## How To Use

* Clone the repo
* Type `npm i` in the console to install all required packages
* Type `mysql -u root -p` to start MySQL. Enter the `password` when prompted for a password (super duper secure!!!!)
* Type `source db/schema.sql` into the console to source the database using the provided schema
* Type `quit` to exit MySQL
* Type `npm run seed` to seed the database
* Type `npm start` to start the server
* The POST/PUT/GET/DELETE routes can all be tested in Insomnia using the paths following the template: `http://localhost:3001/api/`

## Screenshot

![Example 1](/assets/ss1.png)
![Example 2](/assets/ss2.png)
![Example 3](/assets/ss3.png)

## Walkthrough videos

- Walkthrough video 1 (Visual Studio Code, source, seed, start): https://drive.google.com/file/d/14ojXL9ECo7H_DiM3TF6E16VXgotVyxnW/view?usp=sharing

- Walkthrough video 2 (POST, PUT, GET, DELETE routes in Insomnia): https://drive.google.com/file/d/1xXxDY9xJT1HeZz07fpLIh1jr094dgR3g/view?usp=sharing


## GitHub Repository

- Github Repository: https://github.com/dantean/Dantean-E-Commerce

## About The Creator

My name's Joseph. If I'm not writing code, taking pictures, or fixing computers, then I'm probably practicing Tai Chi ☯️

<a href="http://github.com/dantean">![Code I Write](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
</a> <a href="http://www.dantean.dev">🚧</a>


## Special Thanks 🙏

* Instructor Phil Loy and tutor Carlin Shaw helped me get the majority of this project done. You're both awesome!
* Axel Tavares helped me resolve some issues with my PUT route at the very end. Thank you!

## License

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE) 

<div style="overflow-y: scroll; height: 200px; border: 1px solid #ccc; 
padding: 10px;">
Copyright (c) 2024 Joseph Monticelli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:`

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</div>
