import React from "react";
import ReactDOM from "react-dom/client";

/**
 *Header
    -Logo
    -Nav items(Right side)
    -Cart
 *Body
    -search bar
    -Restraunt list
      -RestaruntCard
          -Image
          -Name
          -Rating
          -cuisines
  *Footer
    -links
    -Copyright
 */

const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="data:image/jpeg;base64,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"
      alt="logo"
    />
  </a>
);
// const heading2 = React.createElement(
//   "h1",
//   { id: "title", hellow: "world" },
//   "Namaste everyone from Heading 2"
// );
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
// ]);
// const jsString = "arey bc js ka string";
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const burgerKing = {
  name: "Burger King",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ny6pdcddclq66j4r0wso",
  cuisines: ["Burger", "American"],
  rating: "4.2",
};
const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill" +
          cloudinaryImageId
        }
        alt="photo"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} away</h4>
    </div>
  );
};
const restrautList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "73011",
      name: "KFC",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 6.199999809265137,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
      parentId: 547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "73011",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 6.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "321517",
      name: "FOOD PLANET RESTAURANT",
      uuid: "899d5dd4-200a-48b2-a321-391bb9486ec2",
      city: "22",
      area: "Majra",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "ykboewqeoxnne8fgrnui",
      cuisines: ["Indian", "Chinese", "Tandoor", "Thalis", "Fast Food"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 0.699999988079071,
      slugs: {
        restaurant: "food-planet-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "157/11, Chandra Parisar Chandra Bani Rd, Ekta Enclave, Doon Enclave, Majra, Dehradun, Uttarakhand 248171",
      locality: "Patel Nagar",
      parentId: 81850,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "321517",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 0.699999988079071,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "311806",
      name: "Burger King",
      uuid: "162a4dc4-50de-452a-82cf-751e18ac9952",
      city: "22",
      area: "Anand Vihar Colony",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "iqh7ew5ldfgvpd5dpz60",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "burger-king-chakrata-road-ballupur",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "5/5,4/4 & 3/3, GROUND FLOOR, CHAKRATA ROAD, DEHRADUN, UTTRAKHAND",
      locality: "CHAKRATA ROAD",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code STEALDEAL",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5700193~p=4~eid=00000185-8b09-7c92-0e51-a04c00dc0405",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "311806",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "132460",
      name: "Annapurna Andhra Mess",
      uuid: "c6460418-904b-4371-9e04-0ce8b1b46cae",
      city: "22",
      area: "Dehradun",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zw4qx2szsy9kbszk9n3d",
      cuisines: ["South Indian", "Biryani", "North Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "annapurna-andhra-mess-subhash-nagar-subhash-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "keshav enclave sewla khurd chandrabani road behind uttranchal PG college",
      locality: "Patel Nagar",
      parentId: 33997,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "132460",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "496677",
      name: "Uncle Ji Restaurant",
      uuid: "e652ab57-22c2-4226-b5ea-a5caa26ee0f8",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "kx2ghnwagcnqjtmd5jbc",
      cuisines: ["North Indian", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "uncle-ji-restaurant-patel-nagar-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address: "348 santosh tower, majra road gram majra dehradun 248001",
      locality: "Patel Nagar",
      parentId: 298209,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "496677",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
    subtype: "basic",
  },
];

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrautList.map((restaurant) => {
        return <RestrauntCard {...restaurant.data} />;
      })}
    </div>
  );
};
const Footer = () => {
  return <h4>footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
