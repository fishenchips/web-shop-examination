import { useRouter } from "next/router";

import styles from "./HomePage.module.css";

export const HomePage = () => {
  const router = useRouter();

  const handleAboutPage = () => {
    router.push("/about-us");
  };

  return (
    <div className={styles.homePage}>
      <h2>Welcome To Platzi - We've got it all!</h2>
      <p>
        Here at Platzi we sell what the customer wants. Handmade bike? Is it
        time for a new wooden PC? Look to further than Platzi's Paradise!
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        perferendis nisi quas, corrupti veniam ratione quibusdam aut quisquam?
        Placeat, maiores.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corrupti
        vitae nisi unde eum quibusdam hic quod tenetur adipisci fuga rem nobis
        odit aspernatur natus amet molestias, reprehenderit aliquam harum modi
        earum perspiciatis doloremque officia mollitia laudantium! Ut atque sunt
        sed magni laborum? Veritatis magnam necessitatibus error quas unde
        quidem.
      </p>
      <br />
      <div className={styles.aboutUs}>
        <p>About us</p>
        <button onClick={handleAboutPage}>Read more</button>
      </div>
    </div>
  );
};
