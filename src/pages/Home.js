import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';

function Home() {
  return (
    <section>
      <div className='row'>
        <div className='seven columns'>
          {' '}
          <h4>Welcome to little lemon!</h4>
          <p>
            Our lemons are unrivaled in the entire world. We have artisans
            scouring the globe for the ripest, most amazingly yellow specimens.
            Try us now to enter the Lemonverse.
          </p>
          <p>
            Food ipsum dolor amet ground round Water Chestnut Eggplant, Swiss
            Chard strip steak bresaola Sweet Potatoes pancetta frankfurter Sweet
            Potato Collard Greens Mushrooms. Carrots fine dining tri-tip,
            Cabbage Broccoli Garlic Daikon Radish Arugula Butternut Squash.
            
          </p>
          <p>
          Ground round Celery filet mignon Watercress beef ribs lobster Onions
            cucumber Butternut Squash frankfurter boudin Crookneck Squash
            Eggplant. Mustard Greens fine dining flank corned beef pork loin
            shank. Sirloin Rutabaga corned beef Watercress, ham ground round
            ribeye andouille Onions tomatoes Spinach meatball kielbasa
            tenderloin beef.
          </p>
          <Link className='button button-primary' to={`reservation`}>
            Book a table  <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        <div className='five columns'>
          <img src='table.jpg' alt='eating' className='u-max-full-width' />
        </div>
      </div>
    </section>
  );
}

export default Home;
