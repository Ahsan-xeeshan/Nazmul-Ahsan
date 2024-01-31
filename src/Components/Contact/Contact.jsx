/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import { FaFacebookF, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
export const Contact = () => {
  const form = useRef();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jaqcyf",
        "template_jkiyni8",
        form.current,
        "_7RQoEqhf44ftoJxq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="container mx-auto" id="Contact">
      <div className="text-center mt-12 mb-9" data-aos="fade-down">
        <h3 className="text-3xl lg:text-5xl font-pops font-bold transition-all mb-5 capitalize">
          Contact Me
        </h3>
      </div>
      <div className="lg:flex mt-[100px] py-[50px]">
        <div className="lg:w-1/2 px-2 lg:px-0">
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            {" "}
            <h4 className="text-3xl lg:text-5xl font-medium">Let's Talk</h4>
            <div className="py-10">
              <p className="text-xl font-robo uppercase">
                I am available to talk with you on mentioned below platforms.
              </p>

              <div className="mt-6">
                <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
                  <div>
                    <FaPhoneAlt className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl">+8801775-647344</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
                  <div>
                    <IoMail className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-xl lg:text-2xl">
                      nazmulahsanxeeshan@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
                  <div>
                    <FaFacebookF className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl">Nazmul Ahsan Xeeshan</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
                  <div>
                    <FaXTwitter className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl">Nazmul Ahsan Xeeshan</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start items-center mt-5 text-gray-500">
                  <div>
                    <FaLinkedin className="text-2xl" />
                  </div>
                  <div>
                    <p className="text-2xl">Nazmul Ahsan Xeeshan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 px-2 lg:px-0">
          <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h4 className="text-3xl lg:text-5xl font-medium mb-4">
              Say Hello!
            </h4>

            <Card>
              <CardContent>
                <form ref={form} onSubmit={sendEmail}>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Name"
                        placeholder="Enter your name"
                        variant="outlined"
                        fullWidth
                        name="from_name"
                        margin="normal"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        variant="outlined"
                        fullWidth
                        name="from_email"
                        margin="normal"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Company"
                        type="text"
                        placeholder="Enter your company name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField
                        label="Phone Number"
                        type="number"
                        placeholder="Enter your phone number"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                      />
                    </Grid>

                    <Grid xs={12} sm={12}>
                      <TextField
                        label="Message"
                        type="message"
                        multiline
                        rows={6}
                        placeholder="Write your message"
                        variant="outlined"
                        fullWidth
                        name="message"
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Grid>
                    <Button
                      variant="contained"
                      endIcon={<SendIcon />}
                      defaultValue={30}
                      sx={{
                        width: 200,
                        height: 50,
                        color: "success",
                      }}
                    >
                      Send
                    </Button>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
