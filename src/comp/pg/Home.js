import './button.css';
import './Footer.css';

const year = new Date().getFullYear();

const Home = () => {
  return (
    <>
      <div className="hero-image"></div>

      <section id="detailes">
        <h2>WELCOME TO THE REALM OF CHAMPIONS</h2>
        <p className="pa">Do You Have What it Takes To be on the TOP? </p>
        <p className="pa">
          If you think you have what it takes to be called as champions , then
          we give you the grand stage to compete and show it to the world.
        </p>
        <p className="pa">
          REGISTER today and participate in the most fierce battle ever.{' '}
        </p>
        <h2 className="">
          Participate Today and WIN prizes worth THOUSANDS!!!!
        </h2>

        <div className="reg">
          <a href="https://forms.gle/1FvsPz8vzkWQ261EA" target="blank">
            <button className="btn btn--light body">
              <span className="btn__inner">
                <span className="btn__slide"></span>
                <span className="btn__content">Register NOW!</span>
              </span>
            </button>
          </a>
        </div>
      </section>

      <div className=" container-fluid1 mainimg"></div>

      <footer id="footer">
        <p className="footes">Copyright METHGAMING ⓒ {year} </p>
      </footer>
    </>
  );
};

export default Home;
