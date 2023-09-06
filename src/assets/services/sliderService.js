/* This is for test purposes only!! */

/* Import necessary images of products to be shown on slider in home page */

// PC build 1 images

import pcbuild1_img1 from '../images/images_for_slider_test_only/pcbuild1/pcbuild1_img1.png';
import pcbuild1_img2 from '../images/images_for_slider_test_only/pcbuild1/pcbuild1_img2.png';
import pcbuild1_img3 from '../images/images_for_slider_test_only/pcbuild1/pcbuild1_img3.png';
import pcbuild1_img4 from '../images/images_for_slider_test_only/pcbuild1/pcbuild1_img4.png';

// PC build 2 images

import pcbuild2_img1 from '../images/images_for_slider_test_only/pcbuild2/pcbuild2_img1.png';
import pcbuild2_img2 from '../images/images_for_slider_test_only/pcbuild2/pcbuild2_img2.png';
import pcbuild2_img3 from '../images/images_for_slider_test_only/pcbuild2/pcbuild2_img3.png';
import pcbuild2_img4 from '../images/images_for_slider_test_only/pcbuild2/pcbuild2_img4.png';

// PC build 3 images

import pcbuild3_img1 from '../images/images_for_slider_test_only/pcbuild3/pcbuild3_img1.png';
import pcbuild3_img2 from '../images/images_for_slider_test_only/pcbuild3/pcbuild3_img2.png';
import pcbuild3_img3 from '../images/images_for_slider_test_only/pcbuild3/pcbuild3_img3.png';
import pcbuild3_img4 from '../images/images_for_slider_test_only/pcbuild3/pcbuild3_img4.png';

const sliderProductGallery = [
    {
        id: 1,
        title: 'Designs by IFR-All-White Z690 Formula Build',
        about: 'ROG Maximus Z690 Formula, Intel Core i5-12600k, Corsair iCUE 5000X - White, Corsair Dominator Platinum RGB 32GB (2 x 16GB) DDR5-5200 C36 Black, Corsair iCUE QL120 RGB White, Moonlight White peripherals',
        assets: {
            alt: 'Designs by IFR-All-White Z690 Formula Build',
            gallery: [
                pcbuild1_img1, 
                pcbuild1_img2, 
                pcbuild1_img3, 
                pcbuild1_img4
            ]
        }
    },
    {
        id: 2,
        title: 'EKWB x ROG - Z690 Extreme Glacial Build',
        about: 'ROG Maximus Z690 Extreme Glacial, Intel Core i9-12900K, ROG Strix Helios White Edition, ROG Thor 850W Platinum, ASUS EKWB GeForce RTX 3090, EKWB custom liquid cooling',
        assets: {
            alt: 'EKWB x ROG - Z690 Extreme Glacial Build',
            gallery: [
                pcbuild2_img1, 
                pcbuild2_img2, 
                pcbuild2_img3, 
                pcbuild2_img4
            ]
        }
    },
    {
        id: 3,
        title: 'EKWB x ROG - Z690 Extreme Glacial Build',
        about: 'ROG Maximus Z690 Extreme Glacial, Intel Core i9-12900k, ROG Strix Helios White Edition, ROG Thor 850W Platinum, ASUS EKWB GeForce RTX 3090, EKWB custom liquid cooling',
        assets: {
            alt: 'EKWB x ROG - Z690 Extreme Glacial Build',
            gallery: [
                pcbuild3_img1, 
                pcbuild3_img2, 
                pcbuild3_img3, 
                pcbuild3_img4
            ]
        }
    }
];

export default sliderProductGallery;