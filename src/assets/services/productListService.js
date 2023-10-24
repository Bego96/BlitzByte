
/** DESKTOP PC's ***/

// Asus Desktop PC
import asus_d300_1 from '../images/desktop/ASUS_D300TA-3101002930/ASUS_D300TA-3101002930_1.png';
import asus_d300_2 from '../images/desktop/ASUS_D300TA-3101002930/ASUS_D300TA-3101002930_2.png';
import asus_d300_3 from '../images/desktop/ASUS_D300TA-3101002930/ASUS_D300TA-3101002930_2.png';

// Dell desktop PC

import dell_vostro_1 from '../images/desktop/Dell_Vostro Desktop_3710/Dell_Vostro_Desktop_3710.png';

// HP Desktop 290 PC

import hp_290_g4_1 from '../images/desktop/HP_290_G4/HP_290_G4.png';

// HP Desktop 290 MT PC

import hp_290_mt_1 from '../images/desktop/HP_290_G4_MT/HP_290_G4_MT.png';

// Imel Ryzen PC

import imel_ryzen_3_1 from '../images/desktop/Imel_Ryzen_3/Imel_Ryzen_3.png';

/** Laptops  **/

// Asus 15.6 M250 laptop

import asus_15_m250_1 from '../images/laptop/Laptop_Asus_15.6″_90NB0TY2-M25050/Laptop_Asus_15.6″_90NB0TY2-M25050.png';

// HP 15.6 250 G9 

import hp_250_g9_1 from '../images/laptop/Laptop_HP_15.6″_250_G9/Laptop_HP_15.6″_250_G9_1.png';
import hp_250_g9_2 from '../images/laptop/Laptop_HP_15.6″_250_G9/Laptop_HP_15.6″_250_G9_2.png';
import hp_250_g9_3 from '../images/laptop/Laptop_HP_15.6″_250_G9/Laptop_HP_15.6″_250_G9_3.png';

// HP 250 G8

import hp_250_g8 from '../images/laptop/Laptop_HP_250G8/Laptop_HP_250G8.png';

// hp 250 g8 v2

import hp_250_g8_v2 from '../images/laptop/Laptop_HP_250_G8/Laptop_HP_250_G8.png';

// Lenovo IdeaPad 1 

import lenovo_ideapad_1 from '../images/laptop/Laptop_Lenovo_IdeaPad_1/Laptop_Lenovo_IdeaPad_1.png';

/** Mobile phones  **/

// Apple 13 128 Black

import apple_13_128 from '../images/mobiles/Apple_iPhone_13_128_Black/Apple_iPhone_13_128_Black.png';

// Honor X6 4GB 64GB 

import honor_x6_4_64 from '../images/mobiles/HONOR_X6_4+64_Black/HONOR_X6_4+64_Black.png';

// Redmi Note 11 4gb 64gb 

import redmi_note11_4_64 from '../images/mobiles/Redmi_Note_11_4+64/Redmi_Note_11_4+64.png';

// Samsung Galaxy A34 5G 6GB 128GB

import samsung_a34_5g_6_128 from '../images/mobiles/Samsung_Galaxy_A34_5G_6-128/Samsung_Galaxy_A34_5G_6-128.png';

// Samsung Galaxy A54 5G 8GB 128GB

import samsung_a54_8_128 from '../images/mobiles/Samsung_Galaxy_A54_5G_8-128/Samsung_Galaxy_A54_5G_8-128.png';

/** TV's  **/

// Axen Led AX39

import axen_led from '../images/TV/AXEN_LED_AX39DIL04/AXEN_LED_AX39DIL04.png';

// HiSense TV LED 

import hisense from '../images/TV/HISENSE_TV_LED_43A63H/HISENSE_TV_LED_43A63H.png';

// Philips 32 HD

import philips_32_hd_1 from '../images/TV/Philips_32”_32PHS5507_HD/Philips_32”_32PHS5507_HD_1.png';
import philips_32_hd_2 from '../images/TV/Philips_32”_32PHS5507_HD/Philips_32”_32PHS5507_HD_2.png';

// Philips 50 4K Smart

import philips_50_4k from '../images/TV/Philips_50”_50PUS7607_4K_Smart/Philips_50”_50PUS7607_4K_Smart.png';

// Tesla 32 HD Smart

import tesla_32_hd from '../images/TV/TESLA_32M325BHS_HD_Smart/TESLA_32M325BHS_HD_Smart.png';

let img = 'tesla_32_hd'
console.log(parseInt(img));

const productListService = 
    [
        {
          "id": 1,
          "category": "PC",
          "product": {
            "name": "Asus Desktop PC",
            "type": "Desktop PC",
            "description": "Powerful Asus desktop PC for your computing needs.",
            "price": 999.99,
            "images": [
                {
                    "id": 1,
                    "img": asus_d300_1,
                },
                {
                    "id": 2,
                    "img": asus_d300_2
                },
                {
                    "id": 3,
                    "img": asus_d300_3
                }
            ],
            "components": [
                {
                    "id": 1,
                    "component": "Intel Core i7 Processor"
                },
                {
                    "id": 2,
                    "component": "NVIDIA GeForce RTX 3080 GPU" 
                },
                {
                    "id": 3,
                    "component": "32GB RAM"
                },
                {
                    "id": 4,
                    "component": "2TB SSD"
                },
                {
                    "id": 5,
                    "component": "27-inch 4K Monitor"
                }
            ],
            "specs": {
              "Processor": "Intel Core i7",
              "Graphics Card": "NVIDIA GeForce RTX 3080",
              "RAM": "32GB DDR4",
              "Storage": "2TB SSD",
              "Display": "27-inch 4K"
            }
          }
        },
        {
            "id": 2,
            "category": "PC",
            "product": {
              "name": "Dell Vostro Desktop",
              "type": "Desktop PC",
              "description": "Reliable Dell Vostro desktop PC for business use.",
              "price": 799.99,
              "images": [
                {
                  "id": 1,
                  "img": dell_vostro_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i5 Processor"
                },
                {
                  "id": 2,
                  "component": "16GB RAM"
                },
                {
                  "id": 3,
                  "component": "512GB SSD"
                },
                {
                  "id": 4,
                  "component": "23-inch Full HD Monitor"
                }
              ],
              "specs": {
                "Processor": "Intel Core i5",
                "RAM": "16GB DDR4",
                "Storage": "512GB SSD",
                "Display": "23-inch Full HD"
              }
            }
          },
          {
            "id": 3,
            "category": "PC",
            "product": {
              "name": "HP Desktop 290 PC",
              "type": "Desktop PC",
              "description": "Efficient HP desktop PC for your daily tasks.",
              "price": 699.99,
              "images": [
                {
                  "id": 1,
                  "img": hp_290_g4_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i3 Processor"
                },
                {
                  "id": 2,
                  "component": "8GB RAM"
                },
                {
                  "id": 3,
                  "component": "256GB SSD"
                },
                {
                  "id": 4,
                  "component": "21.5-inch Full HD Monitor"
                }
              ],
              "specs": {
                "Processor": "Intel Core i3",
                "RAM": "8GB DDR4",
                "Storage": "256GB SSD",
                "Display": "21.5-inch Full HD"
              }
            }
          },
          {
            "id": 4,
            "category": "PC",
            "product": {
              "name": "HP Desktop 290 MT PC",
              "type": "Desktop PC",
              "description": "HP desktop PC with expandable design for your business needs.",
              "price": 799.99,
              "images": [
                {
                  "id": 1,
                  "img": hp_290_mt_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i5 Processor"
                },
                {
                  "id": 2,
                  "component": "16GB RAM"
                },
                {
                  "id": 3,
                  "component": "512GB SSD"
                },
                {
                  "id": 4,
                  "component": "21.5-inch Full HD Monitor"
                }
              ],
              "specs": {
                "Processor": "Intel Core i5",
                "RAM": "16GB DDR4",
                "Storage": "512GB SSD",
                "Display": "21.5-inch Full HD"
              }
            }
          },
          {
            "id": 5,
            "category": "PC",
            "product": {
              "name": "Imel Ryzen PC",
              "type": "Desktop PC",
              "description": "Imel desktop PC powered by Ryzen for enhanced performance.",
              "price": 899.99,
              "images": [
                {
                  "id": 1,
                  "img": imel_ryzen_3_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "AMD Ryzen 7 Processor"
                },
                {
                  "id": 2,
                  "component": "32GB RAM"
                },
                {
                  "id": 3,
                  "component": "1TB SSD"
                },
                {
                  "id": 4,
                  "component": "27-inch 4K Monitor"
                }
              ],
              "specs": {
                "Processor": "AMD Ryzen 7",
                "RAM": "32GB DDR4",
                "Storage": "1TB SSD",
                "Display": "27-inch 4K"
              }
            }
          },
          {
            "id": 6,
            "category": "Laptop",
            "product": {
              "name": "Asus 15.6 M250 Laptop",
              "type": "Laptop",
              "description": "Asus 15.6-inch laptop for your computing needs.",
              "price": 699.99,
              "images": [
                {
                  "id": 1,
                  "img": asus_15_m250_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i5 Processor"
                },
                {
                  "id": 2,
                  "component": "8GB RAM"
                },
                {
                  "id": 3,
                  "component": "512GB SSD"
                },
                {
                  "id": 4,
                  "component": "15.6-inch Full HD Display"
                }
              ],
              "specs": {
                "Processor": "Intel Core i5",
                "RAM": "8GB DDR4",
                "Storage": "512GB SSD",
                "Display": "15.6-inch Full HD"
              }
            }
          },{
            "id": 7,
            "category": "Laptop",
            "product": {
              "name": "HP 15.6 250 G9 Laptop",
              "type": "Laptop",
              "description": "HP 15.6-inch laptop for business and personal use.",
              "price": 799.99,
              "images": [
                {
                  "id": 1,
                  "img": hp_250_g9_1
                },
                {
                  "id": 2,
                  "img": hp_250_g9_2
                },
                {
                  "id": 3,
                  "img": hp_250_g9_3
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i7 Processor"
                },
                {
                  "id": 2,
                  "component": "16GB RAM"
                },
                {
                  "id": 3,
                  "component": "1TB SSD"
                },
                {
                  "id": 4,
                  "component": "15.6-inch Full HD Display"
                }
              ],
              "specs": {
                "Processor": "Intel Core i7",
                "RAM": "16GB DDR4",
                "Storage": "1TB SSD",
                "Display": "15.6-inch Full HD"
              }
            }
          },
          {
            "id": 8,
            "category": "Laptop",
            "product": {
              "name": "HP 250 G8 Laptop",
              "type": "Laptop",
              "description": "Reliable HP laptop for everyday tasks.",
              "price": 599.99,
              "images": [
                {
                  "id": 1,
                  "img": hp_250_g8
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i3 Processor"
                },
                {
                  "id": 2,
                  "component": "4GB RAM"
                },
                {
                  "id": 3,
                  "component": "256GB SSD"
                },
                {
                  "id": 4,
                  "component": "15.6-inch HD Display"
                }
              ],
              "specs": {
                "Processor": "Intel Core i3",
                "RAM": "4GB DDR4",
                "Storage": "256GB SSD",
                "Display": "15.6-inch HD"
              }
            }
          },
          {
            "id": 9,
            "category": "Laptop",
            "product": {
              "name": "HP 250 G8 V2 Laptop",
              "type": "Laptop",
              "description": "Updated version of HP 250 G8 laptop for better performance.",
              "price": 649.99,
              "images": [
                {
                  "id": 1,
                  "img": hp_250_g8_v2
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Intel Core i5 Processor"
                },
                {
                  "id": 2,
                  "component": "8GB RAM"
                },
                {
                  "id": 3,
                  "component": "512GB SSD"
                },
                {
                  "id": 4,
                  "component": "15.6-inch Full HD Display"
                }
              ],
              "specs": {
                "Processor": "Intel Core i5",
                "RAM": "8GB DDR4",
                "Storage": "512GB SSD",
                "Display": "15.6-inch Full HD"
              }
            }
          },
          {
            "id": 10,
            "category": "Laptop",
            "product": {
              "name": "Lenovo IdeaPad 1 Laptop",
              "type": "Laptop",
              "description": "Compact and lightweight Lenovo laptop for on-the-go use.",
              "price": 499.99,
              "images": [
                {
                  "id": 1,
                  "img": lenovo_ideapad_1
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "AMD Ryzen 3 Processor"
                },
                {
                  "id": 2,
                  "component": "4GB RAM"
                },
                {
                  "id": 3,
                  "component": "128GB SSD"
                },
                {
                  "id": 4,
                  "component": "14-inch HD Display"
                }
              ],
              "specs": {
                "Processor": "AMD Ryzen 3",
                "RAM": "4GB DDR4",
                "Storage": "128GB SSD",
                "Display": "14-inch HD"
              }
            }
          },
          {
            "id": 11,
            "category": "Phone",
            "product": {
              "name": "Apple iPhone 13 128GB (Black)",
              "type": "Smartphone",
              "description": "The latest Apple iPhone with 128GB storage in Black.",
              "price": 1099.99,
              "images": [
                {
                  "id": 1,
                  "img": apple_13_128
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Apple A15 Bionic"
                },
                {
                  "id": 2,
                  "component": "6GB RAM"
                },
                {
                  "id": 4,
                  "component": "128GB Internal"
                },
                {
                  "id": 5,
                  "component": "6.1-inch Super Retina XDR"
                }
              ],
              "specs": {
                "Processor": "Apple A15 Bionic",
                "RAM": "6GB",
                "Storage": "128GB",
                "Display": "6.1-inch Super Retina XDR"
              }
            }
          },
          {
            "id": 12,
            "category": "Phone",
            "product": {
              "name": "HONOR X6 4GB 64GB (Black)",
              "type": "Smartphone",
              "description": "HONOR X6 smartphone with 4GB RAM and 64GB storage in Black.",
              "price": 349.99,
              "images": [
                {
                  "id": 1,
                  "img": honor_x6_4_64
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Mediatek Helio G35"
                },
                {
                  "id": 2,
                  "component": "4GB RAM"
                },
                {
                  "id": 3,
                  "component": "64GB Internal"
                },
                {
                  "id": 4,
                  "component": "6.5-inch IPS LCD"
                }
              ],
              "specs": {
                "Processor": "Mediatek Helio G35",
                "RAM": "4GB",
                "Storage": "64GB",
                "Display": "6.5-inch IPS LCD"
              }
            }
          },
          {
            "id": 13,
            "category": "Phone",
            "product": {
              "name": "Redmi Note 11 4GB 64GB",
              "type": "Smartphone",
              "description": "Redmi Note 11 smartphone with 4GB RAM and 64GB storage.",
              "price": 299.99,
              "images": [
                {
                  "id": 1,
                  "img": redmi_note11_4_64
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Mediatek Helio G80",
                },
                {
                  "id": 2,
                  "component": "4GB RAM"
                },
                {
                  "id": 3,
                  "component": "64GB Internal"
                },
                {
                  "id": 4,
                  "component": "6.5-inch IPS LCD"
                }
              ],
              "specs": {
                "Processor": "Mediatek Helio G80",
                "RAM": "4GB",
                "Storage": "64GB",
                "Display": "6.5-inch IPS LCD"
              }
            }
          },
          {
            "id": 14,
            "category": "Phone",
            "product": {
              "name": "Samsung Galaxy A34 5G 6GB 128GB",
              "type": "Smartphone",
              "description": "Samsung Galaxy A34 5G smartphone with 6GB RAM and 128GB storage.",
              "price": 499.99,
              "images": [
                {
                  "id": 1,
                  "img": samsung_a34_5g_6_128
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Qualcomm Snapdragon 750G"
                },
                {
                  "id": 2,
                  "component": "6GB RAM"
                },
                {
                  "id": 3,
                  "component": "128GB Internal"
                },
                {
                  "id": 4,
                  "component": "6.5-inch Super AMOLED"
                }
              ],
              "specs": {
                "Processor": "Qualcomm Snapdragon 750G",
                "RAM": "6GB",
                "Storage": "128GB",
                "Display": "6.5-inch Super AMOLED"
              }
            }
          },
          {
            "id": 15,
            "category": "Phone",
            "product": {
              "name": "Samsung Galaxy A54 5G 8GB 128GB",
              "type": "Smartphone",
              "description": "Samsung Galaxy A54 5G smartphone with 8GB RAM and 128GB storage.",
              "price": 599.99,
              "images": [
                {
                  "id": 1,
                  "img": samsung_a54_8_128
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "Qualcomm Snapdragon 750G"
                },
                {
                  "id": 2,
                  "component": "8GB RAM"
                },
                {
                  "id": 3,
                  "component": "128GB Internal"
                },
                {
                  "id": 4,
                  "component": "6.5-inch Super AMOLED"
                }
              ],
              "specs": {
                "Processor": "Qualcomm Snapdragon 750G",
                "RAM": "8GB",
                "Storage": "128GB",
                "Display": "6.5-inch Super AMOLED"
              }
            }
          },
          {
            "id": 16,
            "category": "TV",
            "product": {
              "name": "Axen LED AX39",
              "type": "LED TV",
              "description": "Axen LED TV with a 39-inch screen for your entertainment.",
              "price": 349.99,
              "images": [
                {
                  "id": 1,
                  "img": axen_led
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "39 inches",
                },
                {
                  "id": 2,
                  "component": "Full HD"
                },
                {
                  "id": 3,
                  "component": "No"
                }
              ],
              "specs": {
                "Screen Size": "39 inches",
                "Resolution": "Full HD",
                "Smart TV": "No"
              }
            }
          },
          {
            "id": 17,
            "category": "TV",
            "product": {
              "name": "HiSense TV LED",
              "type": "LED TV",
              "description": "HiSense LED TV with a 43-inch screen for your viewing pleasure.",
              "price": 399.99,
              "images": [
                {
                  "id": 1,
                  "img": hisense
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "49 inches",
                },
                {
                  "id": 2,
                  "component": "Full HD"
                },
                {
                  "id": 3,
                  "component": "Yes"
                }
              ],
              "specs": {
                "Screen Size": "43 inches",
                "Resolution": "Full HD",
                "Smart TV": "Yes"
              }
            }
          },
          {
            "id": 18,
            "category": "TV",
            "product": {
              "name": "Philips 32 HD",
              "type": "LED TV",
              "description": "Philips LED TV with a 32-inch screen for high-definition viewing.",
              "price": 249.99,
              "images": [
                {
                  "id": 1,
                  "img": philips_32_hd_1
                },
                {
                  "id": 2,
                  "img": philips_32_hd_2
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "32 inches",
                },
                {
                  "id": 2,
                  "component": "HD"
                },
                {
                  "id": 3,
                  "component": "No"
                }
              ],
              "specs": {
                "Screen Size": "32 inches",
                "Resolution": "HD",
                "Smart TV": "No"
              }
            }
          },
          {
            "id": 19,
            "category": "TV",
            "product": {
              "name": "Philips 50 4K Smart",
              "type": "LED TV",
              "description": "Philips 4K Smart LED TV with a 50-inch screen for stunning visuals.",
              "price": 799.99,
              "images": [
                {
                  "id": 1,
                  "img": philips_50_4k
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "50 inches",
                },
                {
                  "id": 2,
                  "component": "4K UHD"
                },
                {
                  "id": 3,
                  "component": "Yes"
                }
              ],
              "specs": {
                "Screen Size": "50 inches",
                "Resolution": "4K UHD",
                "Smart TV": "Yes"
              }
            }
          },
          {
            "id": 20,
            "category": "TV",
            "product": {
              "name": "Tesla 32 HD Smart",
              "type": "LED TV",
              "description": "Tesla 32-inch HD Smart LED TV for your entertainment needs.",
              "price": 299.99,
              "images": [
                {
                  "id": 1,
                  "img": tesla_32_hd
                }
              ],
              "components": [
                {
                  "id": 1,
                  "component": "32 inches",
                },
                {
                  "id": 2,
                  "component": "HD"
                },
                {
                  "id": 3,
                  "component": "Yes"
                }
              ],
              "specs": {
                "Screen Size": "32 inches",
                "Resolution": "HD",
                "Smart TV": "Yes"
              }
            }
          }
          
                  
];


export default productListService;

