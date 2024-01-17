const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const uri = "mongodb+srv://rijon:JV0wLEtNq77jv8sA@cluster0.etpi30o.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const bannerCollection = client.db('toyhouse').collection('banner');
        const logoCollection = client.db('toyhouse').collection('logo');
        const subscribeCollection = client.db('toyhouse').collection('subscribes');
        const orderCollection = client.db('toyhouse').collection('orders');
        const aboutCollection = client.db('toyhouse').collection('about');
        const videoCollection = client.db('toyhouse').collection('video');
        const serviceCollection = client.db('toyhouse').collection('service');
        const serviceitemCollection = client.db('toyhouse').collection('serviceItems');
        const stepCollection = client.db('toyhouse').collection('step');
        const TestimonialCollection = client.db('toyhouse').collection('Testimonial');
        const TestimonialtextCollection = client.db('toyhouse').collection('Testimonialtext');
        const contactCollection = client.db('toyhouse').collection('Contact');
        const messageCollection = client.db('toyhouse').collection('Message');
        const aboutFooterCollection = client.db('toyhouse').collection('AboutFooter');
        const addressFooterCollection = client.db('toyhouse').collection('AddressFooter');
        const socialFooterCollection = client.db('toyhouse').collection('SocialFooter');
        const copyrightCollection = client.db('toyhouse').collection('CopyRight');
        const paypalCollection = client.db('toyhouse').collection('paypal');
        const userCollection = client.db('toyhouse').collection('users');




        /* Admin User  */


        app.post('/add-user', async (req, res) => {
            const addUser = req.body;
            const result = await userCollection.insertOne(addUser);
            res.send(result);
        });


        app.get('/users', async (req, res) => {
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const users = await userCollection.findOne(query);
            res.send(users);

        });



        app.put("/upadete-users/:id", async (req, res) => {
            const id = req.params.id;
            const userEdit = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    userEmail: userEdit.userEmail,
                    userEmail: userEdit.userEmail,

                },
            };

            const result = await userCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });





        /**
 * Banner Part Start
 * **/
        app.post('/add-banner', async (req, res) => {
            const addBanner = req.body;
            const result = await bannerCollection.insertOne(addBanner);
            res.send(result);
        });

        app.get('/banner', async (req, res) => {
            const query = {};
            const cursor = bannerCollection.find(query);
            const banner = await cursor.toArray();
            res.send(banner);
        });
        app.get('/banner/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const banner = await bannerCollection.findOne(query);
            res.send(banner);

        });


        app.put("/update-banner/:id", async (req, res) => {
            const id = req.params.id;
            const bannerSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    bannerHeading: bannerSection.bannerHeading,
                    bannerDetails: bannerSection.bannerDetails,
                    bannerImage: bannerSection.bannerImage,

                },
            };

            const result = await bannerCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });

        /** * Banner Part End   * **/



        /** Contact Message Part Start  * **/


        app.post('/add-message', async (req, res) => {
            const addmessage = req.body;
            const result = await messageCollection.insertOne(addmessage);
            res.send(result);
        });

        app.get('/messages', async (req, res) => {
            const query = {};
            const cursor = messageCollection.find(query);
            const message = await cursor.toArray();
            res.send(message);
        });

        app.get('/message/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const message = await messageCollection.findOne(query);
            res.send(message);

        });

        app.put("/message/:id", async (req, res) => {
            const id = req.params.id;
            const updateMessageStatus = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    messageStatus: updateMessageStatus.messageStatus,
                },
            };

            const result = await messageCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        /** Contact Message Part End
         * **/






        /*** Logo Part Start* **/


        app.post('/add-logo', async (req, res) => {
            const addlogo = req.body;
            const result = await logoCollection.insertOne(addlogo);
            res.send(result);
        });

        app.get('/logo', async (req, res) => {
            const query = {};
            const cursor = logoCollection.find(query);
            const logo = await cursor.toArray();
            res.send(logo);
        });


        app.get('/logo/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const message = await logoCollection.findOne(query);
            res.send(message);

        });

        app.put("/logo/:id", async (req, res) => {
            const id = req.params.id;
            const logoSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    logo: logoSection.logo,
                },
            };

            const result = await logoCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });





        /*** Logo Part End* **/


        /*** About Part Start* **/


        app.post('/add-about', async (req, res) => {
            const addabout = req.body;
            const result = await aboutCollection.insertOne(addabout);
            res.send(result);
        });

        app.get('/about', async (req, res) => {
            const query = {};
            const cursor = aboutCollection.find(query);
            const about = await cursor.toArray();
            res.send(about);
        });


        app.get('/about-us/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const about = await aboutCollection.findOne(query);
            res.send(about);

        });



        app.put("/update-about/:id", async (req, res) => {
            const id = req.params.id;
            const aboutSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    aboutText: aboutSection.aboutText,
                    aboutHeading: aboutSection.aboutHeading,
                    aboutDetails: aboutSection.aboutDetails,
                    aboutPointone: aboutSection.aboutPointone,
                    aboutPointwo: aboutSection.aboutPointwo,
                    numberYear: aboutSection.numberYear,
                    experienceDetails: aboutSection.experienceDetails,
                    aboutImage: aboutSection.aboutImage,
                },
            };

            const result = await aboutCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });




        /*** About Part End* **/



        /*** Video Part Start* **/


        app.post('/add-video', async (req, res) => {
            const addvideo = req.body;
            const result = await videoCollection.insertOne(addvideo);
            res.send(result);
        });

        app.get('/video', async (req, res) => {
            const query = {};
            const cursor = videoCollection.find(query);
            const video = await cursor.toArray();
            res.send(video);
        });

        app.get('/video/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const video = await videoCollection.findOne(query);
            res.send(video);

        });

        app.put("/update-video/:id", async (req, res) => {
            const id = req.params.id;
            const videoSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    watchText: videoSection.watchText,
                    videoHeading: videoSection.videoHeading,
                    videoImg: videoSection.videoImg,
                    videoLink: videoSection.videoLink,

                },
            };

            const result = await videoCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });



        /*** Video Part End* **/



        /*** Service Part Start* **/


        app.post('/add-service', async (req, res) => {
            const addservice = req.body;
            const result = await serviceCollection.insertOne(addservice);
            res.send(result);
        });

        app.get('/service', async (req, res) => {
            const query = {};
            const cursor = serviceCollection.find(query);
            const service = await cursor.toArray();
            res.send(service);
        });



        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const service = await serviceCollection.findOne(query);
            res.send(service);


            app.put("/service/:id", async (req, res) => {
                const id = req.params.id;
                const serviceSection = req.body;
                const filter = { _id: new ObjectId(id) };
                const options = { upsert: true };
                const updatedDoc = {
                    $set: {
                        serviceText: serviceSection.serviceText,
                        serviceHeading: serviceSection.serviceHeading,
                        serviceDetails: serviceSection.serviceDetails,
                        buttonText: serviceSection.buttonText,
                        buttonLink: serviceSection.buttonLink,


                    },
                };

                const result = await serviceCollection.updateOne(
                    filter,
                    updatedDoc,
                    options
                );
                res.send(result);
            });




            /*** Item Part Start* **/


        });
        app.post('/add-service-item', async (req, res) => {
            const addItem = req.body;
            const result = await serviceitemCollection.insertOne(addItem);
            res.send(result);
        });

        app.get('/service-items', async (req, res) => {
            const query = {};
            const cursor = serviceitemCollection.find(query);
            const items = await cursor.toArray();
            res.send(items);
        });



        app.get('/service-item/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const item = await serviceitemCollection.findOne(query);
            res.send(item);

        });



        app.put("/service-item/:id", async (req, res) => {
            const id = req.params.id;
            const itemSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    serviceIcon: itemSection.serviceIcon,
                    serviceTitle: itemSection.serviceTitle,
                    serviceDetails: itemSection.serviceDetails,


                },
            };

            const result = await serviceitemCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });






        /*** Service Part End* **/



        /*** Step Part Start* **/


        app.post('/add-step', async (req, res) => {
            const addstep = req.body;
            const result = await stepCollection.insertOne(addstep);
            res.send(result);
        });

        app.get('/steps', async (req, res) => {
            const query = {};
            const cursor = stepCollection.find(query);
            const step = await cursor.toArray();
            res.send(step);
        });



        app.get('/step/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const step = await stepCollection.findOne(query);
            res.send(step);



            /*** Step sub Part Start* **/


        });
        app.post('/add-step-item', async (req, res) => {
            const addStep = req.body;
            const result = await stepCollection.insertOne(addStep);
            res.send(result);
        });

        app.get('/step-items', async (req, res) => {
            const query = {};
            const cursor = stepCollection.find(query);
            const steps = await cursor.toArray();
            res.send(steps);
        });



        app.get('/step-item/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const step = await stepCollection.findOne(query);
            res.send(step);

        });



        app.put("/step-item/:id", async (req, res) => {
            const id = req.params.id;
            const stepSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    stepNumber: stepSection.stepNumber,
                    stepTitle: stepSection.stepTitle,
                    stepDetails: stepSection.stepDetails,


                },
            };

            const result = await stepCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });






        /*** Step Part End* **/



        /*** Step sub Part Start* **/



        app.post('/add-step-item', async (req, res) => {
            const addStep = req.body;
            const result = await stepCollection.insertOne(addStep);
            res.send(result);
        });

        app.get('/step-items', async (req, res) => {
            const query = {};
            const cursor = stepCollection.find(query);
            const steps = await cursor.toArray();
            res.send(steps);
        });



        app.get('/step-item/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const step = await stepCollection.findOne(query);
            res.send(step);

        });



        app.put("/step-item/:id", async (req, res) => {
            const id = req.params.id;
            const stepSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    stepNumber: stepSection.stepNumber,
                    stepTitle: stepSection.stepTitle,
                    stepDetails: stepSection.stepDetails,


                },
            };

            const result = await stepCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });






        /*** Step Part End* **/





        /*** Start Testimonial Start * **/


        app.post('/add-testimonial-text', async (req, res) => {
            const addservice = req.body;
            const result = await TestimonialtextCollection.insertOne(addservice);
            res.send(result);
        });

        app.get('/testimonialtext', async (req, res) => {
            const query = {};
            const cursor = TestimonialtextCollection.find(query);
            const service = await cursor.toArray();
            res.send(service);
        });


        app.get('/testimonialtext/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const order = await TestimonialtextCollection.findOne(query);
            res.send(order);

        });


        app.put("/testimonialtext/:id", async (req, res) => {
            const id = req.params.id;
            const testimonialSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    testimonialText: testimonialSection.testimonialText,
                    testimonialHeading: testimonialSection.testimonialHeading,
                    testimonialDetails: testimonialSection.testimonialDetails,



                },
            };

            const result = await TestimonialtextCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });





        /*** Testimonial Item Satrt* **/


        app.post('/add-testimonial', async (req, res) => {
            const addTestimonial = req.body;
            const result = await TestimonialCollection.insertOne(addTestimonial);
            res.send(result);
        });

        app.get('/testimonials', async (req, res) => {
            const query = {};
            const cursor = TestimonialCollection.find(query);
            const testimonials = await cursor.toArray();
            res.send(testimonials);
        });

        app.get('/testimonial/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const order = await TestimonialCollection.findOne(query);
            res.send(order);

        });


        app.put("/testimonial/:id", async (req, res) => {
            const id = req.params.id;
            const editTestimonial = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    image: editTestimonial.image,
                    personName: editTestimonial.personName,
                    personTitle: editTestimonial.personTitle,
                    desc: editTestimonial.desc,


                },
            };

            const result = await TestimonialCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });

        /*** Testimonial Page End* **/



        /*** Contact Page Start* **/

        app.post('/add-contact', async (req, res) => {
            const addContact = req.body;
            const result = await contactCollection.insertOne(addContact);
            res.send(result);
        });

        app.get('/contacts', async (req, res) => {
            const query = {};
            const cursor = contactCollection.find(query);
            const contacts = await cursor.toArray();
            res.send(contacts);
        });


        app.get('/contacts/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const footerab = await contactCollection.findOne(query);
            res.send(footerab);

        });


        app.put("/contacts/:id", async (req, res) => {
            const id = req.params.id;
            const contactSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    contactImg: contactSection.contactImg,
                    contactTitle: contactSection.contactTitle,
                    contactDetails: contactSection.contactDetails,


                },
            };

            const result = await contactCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });



        /*** Contact Page End* **/


        /*** Footer About Part Start* **/

        app.post('/add-footer-about', async (req, res) => {
            const addFooterAbout = req.body;
            const result = await aboutFooterCollection.insertOne(addFooterAbout);
            res.send(result);
        });

        app.get('/footer-about', async (req, res) => {
            const query = {};
            const cursor = aboutFooterCollection.find(query);
            const footerabouts = await cursor.toArray();
            res.send(footerabouts);
        });



        app.get('/footer-about/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const footerab = await aboutFooterCollection.findOne(query);
            res.send(footerab);

        });


        app.put("/footer-about/:id", async (req, res) => {
            const id = req.params.id;
            const FooterAboutSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    aboutFooterText: FooterAboutSection.aboutFooterText,
                    aboutFooterDetails: FooterAboutSection.aboutFooterDetails,


                },
            };

            const result = await aboutFooterCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        /*** Footer About Part End* **/



        /*** Footer Address Part Start* **/

        app.post('/add-footer-address', async (req, res) => {
            const addFooterAddress = req.body;
            const result = await addressFooterCollection.insertOne(addFooterAddress);
            res.send(result);
        });

        app.get('/footer-address', async (req, res) => {
            const query = {};
            const cursor = addressFooterCollection.find(query);
            const address = await cursor.toArray();
            res.send(address);
        });


        app.get('/footer-address/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const footerab = await addressFooterCollection.findOne(query);
            res.send(footerab);

        });


        app.put("/footer-address/:id", async (req, res) => {
            const id = req.params.id;
            const contactSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    footeraddress: contactSection.footeraddress,
                    footerPhone: contactSection.footerPhone,
                    footerEmail: contactSection.footerEmail,


                },
            };

            const result = await addressFooterCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        /*** Footer Address Part End* **/


        /*** Footer Social Part Start* **/

        app.post('/add-footer-social', async (req, res) => {
            const addFooterSocial = req.body;
            const result = await socialFooterCollection.insertOne(addFooterSocial);
            res.send(result);
        });

        app.get('/footer-social', async (req, res) => {
            const query = {};
            const cursor = socialFooterCollection.find(query);
            const social = await cursor.toArray();
            res.send(social);
        });

        app.get('/footer-social/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const footerab = await socialFooterCollection.findOne(query);
            res.send(footerab);

        });


        app.put("/footer-social/:id", async (req, res) => {
            const id = req.params.id;
            const footerSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    fblink: footerSection.fblink,
                    inslink: footerSection.inslink,



                },
            };

            const result = await socialFooterCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        /*** Footer Social Part End* **/


        /*** Footer Copy Right Part Start* **/


        app.post('/add-footer-copyright', async (req, res) => {
            const addcopyright = req.body;
            const result = await copyrightCollection.insertOne(addcopyright);
            res.send(result);
        });

        app.get('/copyrights', async (req, res) => {
            const query = {};
            const cursor = copyrightCollection.find(query);
            const copyright = await cursor.toArray();
            res.send(copyright);
        });


        app.get('/copyrights/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const footercopy = await copyrightCollection.findOne(query);
            res.send(footercopy);

        });


        app.put("/copyrights/:id", async (req, res) => {
            const id = req.params.id;
            const FooterCopyrightSection = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    copyrightText: FooterCopyrightSection.copyrightText,



                },
            };

            const result = await copyrightCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });

        /*** Footer Copy Right Part End* **/


















        /**  Subscriber Part Start  * **/

        app.post('/add-subscriber', async (req, res) => {
            const addSubscribe = req.body;
            const result = await subscribeCollection.insertOne(addSubscribe);
            res.send(result);
        });

        app.get('/subscribers', async (req, res) => {
            const query = {};
            const cursor = subscribeCollection.find(query);
            const subscriber = await cursor.toArray();
            res.send(subscriber);
        });


        /**
         * Subscriber Part End
         * **/

        /**
   * Orders Part Start
   * **/
        app.post('/new-order', async (req, res) => {
            const newOrder = req.body;
            const result = await orderCollection.insertOne(newOrder);
            res.send(result);
        });

        app.get('/orders', async (req, res) => {
            const query = {};
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders);
        });

        app.get('/order/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const order = await orderCollection.findOne(query);
            res.send(order);

        });


        app.put("/order/:id", async (req, res) => {
            const id = req.params.id;
            const order = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    paymentStatus: order.paymentStatus,
                },
            };

            const result = await orderCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });
        app.put("/order-cancelled/:id", async (req, res) => {
            const id = req.params.id;
            const order = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    paymentStatus: order.paymentStatus,
                },
            };

            const result = await orderCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        app.put("/order-for-status/:id", async (req, res) => {
            const id = req.params.id;
            const order = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    orderStatus: order.orderStatus,
                },
            };

            const result = await orderCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });


        /**
        * Orders Part End
        * **/
        /**
  
  
  
  
  
          /*** single post Get* **/
        app.get('/post/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const post = await blogCollection.findOne(query);
            res.send(post);

        });




        app.post('/add-student', async (req, res) => {
            const addstudent = req.body;
            const result = await studentCollection.insertOne(addstudent);
            res.send(result);
        });



        app.get('/students', async (req, res) => {
            const query = {};
            const cursor = studentCollection.find(query);
            const students = await cursor.toArray();
            res.send(students);
        });




        app.post('/add-pricing', async (req, res) => {
            const addpricing = req.body;
            const result = await pricingCollection.insertOne(addpricing);
            res.send(result);
        });


        app.get('/pricing', async (req, res) => {
            const query = {};
            const cursor = pricingCollection.find(query);
            const pricing = await cursor.toArray();
            res.send(pricing);
        });

        app.get('/product/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const pricing = await pricingCollection.findOne(query);
            res.send(pricing);

        });



        app.post('/oder-now', async (req, res) => {
            const addorder = req.body;
            const result = await orderCollection.insertOne(addorder);
            res.send(result);
        });


        app.get('/order/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const order = await orderCollection.findOne(query);
            res.send(order);

        });



        app.get('/orders', async (req, res) => {
            const query = {};
            const cursor = orderCollection.find(query);
            const orders = await cursor.toArray();
            res.send(orders);
        });




        /* paypalCollection */


        app.get('/paypal-email', async (req, res) => {
            const query = {};
            const cursor = paypalCollection.find(query);
            const emails = await cursor.toArray();
            res.send(emails);
        });

        app.get('/paypal-email/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const email = await paypalCollection.findOne(query);
            res.send(email);

        });



        app.put("/paypal-email/:id", async (req, res) => {
            const id = req.params.id;
            const emailEdit = req.body;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedDoc = {
                $set: {
                    paypalEmail: emailEdit.paypalEmail,
                },
            };

            const result = await paypalCollection.updateOne(
                filter,
                updatedDoc,
                options
            );
            res.send(result);
        });












    }
    finally {

    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Good Job, Server is Working Fine');
});

app.listen(port, () => {
    console.log('Good Job, Server is Live Now', port);
});