import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const seedData = async () => {
  try {
    await pool.query('DELETE FROM places');
    await pool.query(`
        INSERT INTO places (name, province, description, best_time, image)
        VALUES
        (
            'Ha Long Bay',
            'Quang Ninh',
            'A UNESCO World Heritage Site famous for limestone islands.',
            'October - April',
            'https://www.paradisevietnam.com/public/backend/uploads/what-about-ha-long-bay.jpg'
        ),
        (
            'Da Lat',
            'Lam Dong',
            'Cool climate city surrounded by mountains and flower gardens.',
            'February - April',
            'https://vietchallenge.com/images/news/595a905565ca65ce429403c51bf710c2.jpg'
        ),
        (
            'Phu Quoc',
            'Kien Giang',
            'Beautiful island with white sand beaches and seafood. You can enjoy a dinner with firework show.',
            'November - March',
            'https://hivietnamtravel.com/wp-content/uploads/2022/10/bia-pqq-1.jpg'
        ),
        (
            'Ho Chi Minh City',
            'Ho Chi Minh',
            'Vietnam''s largest city, known for its modern skyline, food, and nightlife.',
            'December - April',
            'https://i.pinimg.com/originals/a9/51/b5/a951b5a150401ca34b22d3a676620f19.jpg'
        ),
        (
            'Hanoi',
            'Hanoi',
            'Vietnam''s capital city, famous for its Old Quarter, lakes, and rich history.',
            'September - November',
            'https://duaelbluiumc3.cloudfront.net/Media/Images/hanoi-train-street-greenery.jpg'
        ),
        (
            'Hoi An Ancient Town',
            'Quang Nam',
            'Historic town known for colorful lanterns and riverside views.',
            'February - April',
            'https://vietnamreviewer.com/wp-content/uploads/2024/12/Hoi-An-Ancient-Town5.jpg'
        ),
        (
            'Sa Pa',
            'Lao Cai',
            'Mountain town famous for rice terraces and local culture.',
            'March - May',
            'https://res.klook.com/image/upload/fl_lossy.progressive,q_60/Mobile/City/nab4excv9bkndhqnsyvl.jpg'
        );
        `);

    console.log("Data seeded!");
    pool.end();
  } catch (err) {
    console.error(err);
  }
};

seedData();