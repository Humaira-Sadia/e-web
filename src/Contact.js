import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 3rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.2168967011!2d88.26495036769767!3d22.535564937275637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1681455131197!5m2!1sen!2sin" 
      width="100%"
      height="300"
      style={{border : 0 }}
      allowFullScreen=""
      loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    
      <div className="container">
        <div className="contact-form">

          <form action="https://formspree.io/f/xzbqkyol" method="POST" className="contact-inputs">
            <input type="text" placeholder="Username" name="Username" required autoComplete="off"/>

            <input type="email" placeholder="Email" name="Email" required autoComplete="off"/>

            <textarea name="message" placeholder="Enter your message" cols="30" rows="10" required autoComplete="off"/>

            <input type="submit" value="send"/>
          </form>
        </div>
      </div>
  </Wrapper>;
};

export default Contact;
