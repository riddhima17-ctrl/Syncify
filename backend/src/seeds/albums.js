import mongoose from "mongoose";
import { Song } from "../models/song.model.js";
import { Album } from "../models/album.model.js";
import { config } from "dotenv";

config();

const seedDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://vedicradiancehelp:rDfEqKupEj0YhUPC@cluster0.atkt5.mongodb.net/Syncify?retryWrites=true&w=majority&appName=Cluster0"
    );
    // Song information to be inserted
    const songData = [
      {
        title: "Surroor (Arabic Mix By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Shalmali Kholgade",
        imageUrl:
          "https://pagalfree.com/images/128Surroor%20%28Arabic%20Mix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Surroor%20%28Arabic%20Mix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 239,
      },
      {
        title: "Beeba",
        artist: "Yo Yo Honey Singh, Laïoung, Wahab Bugti",
        imageUrl:
          "https://pagalfree.com/images/128Beeba%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Beeba%20-%20Glory%20128%20Kbps.mp3",
        duration: 210,
      },
      {
        title: "Chhote Chhote Peg",
        artist: "Navraj Hans, Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Chhote%20Chhote%20Peg%20-%20Sonu%20Ke%20Titu%20Ki%20Sweety%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Chhote%20Chhote%20Peg%20-%20Sonu%20Ke%20Titu%20Ki%20Sweety%20128%20Kbps.mp3",
        duration: 206,
      },
      {
        title: "Head Banger",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Head%20Banger%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Head%20Banger%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 193,
      },
      {
        title: "Who Knows",
        artist: "So Dee, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Who%20Knows%20-%20So%20Dee%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Who%20Knows%20-%20So%20Dee%20128%20Kbps.mp3",
        duration: 240,
      },
      {
        title: "Aankhon Aankhon",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Aankhon%20Aankhon%20-%20Bhaag%20Johnny%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Aankhon%20Aankhon%20-%20Bhaag%20Johnny%20128%20Kbps.mp3",
        duration: 229,
      },
      {
        title: "Together Forever",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Together%20Forever%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Together%20Forever%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 181,
      },
      {
        title: "Blue Hai Paani Paani",
        artist: "Yo Yo Honey Singh, Khalif, Arijit Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Blue%20Hai%20Paani%20Paani%20-%20Yaariyan%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Blue%20Hai%20Paani%20Paani%20-%20Yaariyan%202%20128%20Kbps.mp3",
        duration: 211,
      },
      {
        title: "The Xpose (Mashup By Kiran Kamath)",
        artist:
          "Himesh Reshammiya, Yo Yo Honey Singh, Mika Singh, Irrfan Khan, Ankit Tiwari, Mohammed Irfan, Mohit Chauhan, Neeti Mohan, Rekha Bhardwaj, Palak Muchhal, Shalmali Kholgade, Shubhangi Tewari",
        imageUrl:
          "https://pagalfree.com/images/128The%20Xpose%20%28Mashup%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-The%20Xpose%20%28Mashup%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 214,
      },
      {
        title: "Soul",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Soul%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Soul%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 221,
      },
      {
        title: "Party On My Mind",
        artist: "KK, Shefali Alvares",
        imageUrl:
          "https://pagalfree.com/images/128Party%20On%20My%20Mind%20%20-%20%20Remix%20By%20DJ%20Jay%20Dabhi%20-%20Race%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Party%20On%20My%20Mind%20%20-%20%20Remix%20By%20DJ%20Jay%20Dabhi%20-%20Race%202%20128%20Kbps.mp3",
        duration: 221,
      },
      {
        title: "This Party Is Over Now",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128This%20Party%20Is%20Over%20Now%20-%20Mitron%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-This%20Party%20Is%20Over%20Now%20-%20Mitron%20128%20Kbps.mp3",
        duration: 205,
      },
      {
        title: "Loca",
        artist: "Yo Yo Honey Singh, Simar Kaur",
        imageUrl:
          "https://pagalfree.com/images/128Loca%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Loca%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 224,
      },
      {
        title: "Dil Chori",
        artist: "Yo Yo Honey Singh, Simar Kaur, Ishers",
        imageUrl:
          "https://pagalfree.com/images/128Dil%20Chori%20-%20Sonu%20Ke%20Titu%20Ki%20Sweety%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Dil%20Chori%20-%20Sonu%20Ke%20Titu%20Ki%20Sweety%20128%20Kbps.mp3",
        duration: 213,
      },
      {
        title: "Melody Roja",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Melody%20Roja%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Melody%20Roja%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 240,
      },
      {
        title: "Call Aundi",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Call%20Aundi%20-%20Zorawar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Call%20Aundi%20-%20Zorawar%20128%20Kbps.mp3",
        duration: 217,
      },
      {
        title: "Vigdiyan Heeran",
        artist: "Rony Ajnali, Gill Machhrai, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Vigdiyan%20Heeran%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Vigdiyan%20Heeran%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 205,
      },
      {
        title: "Chal Mere Ghar",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Chal%20Mere%20Ghar%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Chal%20Mere%20Ghar%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 191,
      },
      {
        title: "Lets Get It Party",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Lets%20Get%20It%20Party%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lets%20Get%20It%20Party%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 240,
      },
      {
        title: "Savage",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Savage%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Savage%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 187,
      },
      {
        title: "Blue Eyes",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Blue%20Eyes%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 205,
      },
      {
        title: "Ka Kha Ga",
        artist: "Hommie Dilliwala, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Ka%20Kha%20Ga%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Ka%20Kha%20Ga%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 231,
      },
      {
        title: "Hauli Hauli",
        artist: "Guru Randhawa, Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Hauli%20Hauli%20-%20Khel%20Khel%20Mein%20128%20Kbps.mp3",
        duration: 201,
      },
      {
        title: "Chaar Botal Vodka",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Chaar%20Botal%20Vodka%20-%20Ragini%20MMS%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Chaar%20Botal%20Vodka%20-%20Ragini%20MMS%202%20128%20Kbps.mp3",
        duration: 196,
      },
      {
        title: "Sunny Sunny 2.O",
        artist: "Yo Yo Honey Singh, Khalif, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Sunny%20Sunny%202.O%20-%20Yaariyan%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sunny%20Sunny%202.O%20-%20Yaariyan%202%20128%20Kbps.mp3",
        duration: 184,
      },
      {
        title: "Alcoholic Remix",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Alcoholic%20Remix%20-%20The%20Shaukeens%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Alcoholic%20Remix%20-%20The%20Shaukeens%20128%20Kbps.mp3",
        duration: 233,
      },
      {
        title: "Boom Boom",
        artist: "Yo Yo Honey Singh, Hommie Dilliwala",
        imageUrl:
          "https://pagalfree.com/images/128Boom%20Boom%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Boom%20Boom%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 202,
      },
      {
        title: "Designer",
        artist: "Guru Randhawa,Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Designer%20-%20Guru%20Randhawa%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Designer%20-%20Guru%20Randhawa%20128%20Kbps.mp3",
        duration: 212,
      },
      {
        title: "IM Your DJ Tonight",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128IM%20Your%20DJ%20Tonight%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-IM%20Your%20DJ%20Tonight%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 212,
      },
      {
        title: "Saiyaan Ji",
        artist: "Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Saiyaan%20Ji%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Saiyaan%20Ji%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 194,
      },
      {
        title: "One Thousand Miles",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128One%20Thousand%20Miles%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-One%20Thousand%20Miles%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 188,
      },
      {
        title: "Hai Apna Dil (Blues Mix By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Hai%20Apna%20Dil%20%28Blues%20Mix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Hai%20Apna%20Dil%20%28Blues%20Mix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 185,
      },
      {
        title: "ABCD",
        artist: "Pritam, Benny Dayal, Shefali Alvares, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128ABCD%20-%20Yaariyan%20-%20Yaariyan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-ABCD%20-%20Yaariyan%20-%20Yaariyan%20128%20Kbps.mp3",
        duration: 240,
      },
      {
        title: "Garaari",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Garaari%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Garaari%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 229,
      },
      {
        title: "Ice Cream",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Palak Muchhal",
        imageUrl:
          "https://pagalfree.com/images/128Ice%20Cream%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Ice%20Cream%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 193,
      },
      {
        title: "Naagan",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Naagan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Naagan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 204,
      },
      {
        title: "Lapata",
        artist: "Yo Yo Honey Singh, Pho",
        imageUrl:
          "https://pagalfree.com/images/128Lapata%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lapata%20-%20Glory%20128%20Kbps.mp3",
        duration: 187,
      },
      {
        title: "Accounts",
        artist: "Nijjar, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Accounts%20-%20His%20Story%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Accounts%20-%20His%20Story%20128%20Kbps.mp3",
        duration: 208,
      },
      {
        title: "Goliyan",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Goliyan%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Goliyan%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 200,
      },
      {
        title: "Savage",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Savage%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Savage%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 184,
      },
      {
        title: "Majnoonh",
        artist: "Yo Yo Honey Singh, Jamila",
        imageUrl:
          "https://pagalfree.com/images/128Majnoonh%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Majnoonh%20-%20Glory%20128%20Kbps.mp3",
        duration: 196,
      },
      {
        title: "Malamaal",
        artist: "Yo Yo Honey Singh, Yina Menez",
        imageUrl:
          "https://pagalfree.com/images/128Malamaal%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Malamaal%20-%20Glory%20128%20Kbps.mp3",
        duration: 198,
      },
      {
        title: "Race 2 Mashup By Kiran Kamath",
        artist:
          "Shefali Alvares, Shalmali Kholgade, Atif Aslam, Vishal Dadlani, Yo Yo Honey Singh, Benny Dayal, KK",
        imageUrl:
          "https://pagalfree.com/images/128Race%202%20Mashup%20By%20Kiran%20Kamath%20-%20Race%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Race%202%20Mashup%20By%20Kiran%20Kamath%20-%20Race%202%20128%20Kbps.mp3",
        duration: 224,
      },
      {
        title: "Gaddi Neevi",
        artist: "Singhsta, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Gaddi%20Neevi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Gaddi%20Neevi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 185,
      },
      {
        title: "Sports Gaddiyan",
        artist: "Yo Yo Honey Singh, Leo Grewal",
        imageUrl:
          "https://pagalfree.com/images/128Sports%20Gaddiyan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sports%20Gaddiyan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 223,
      },
      {
        title: "Rani Tu Mein Raja (Remix)",
        artist:
          "Himesh Reshammiya, Mika Singh, Bhavya Pandit, Yo Yo Honey Singh, Dj Chetas",
        imageUrl:
          "https://pagalfree.com/images/128Rani%20Tu%20Mein%20Raja%20%28Remix%29%20-%20Son%20Of%20Sardaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Rani%20Tu%20Mein%20Raja%20%28Remix%29%20-%20Son%20Of%20Sardaar%20128%20Kbps.mp3",
        duration: 191,
      },
      {
        title: "Rani Tu Mein Raja",
        artist:
          "Himesh Reshammiya, Mika Singh, Bhavya Pandit, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Rani%20Tu%20Mein%20Raja%20-%20Son%20Of%20Sardaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Rani%20Tu%20Mein%20Raja%20-%20Son%20Of%20Sardaar%20128%20Kbps.mp3",
        duration: 218,
      },
      {
        title: "Soorma",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Soorma%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Soorma%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 182,
      },
      {
        title: "Tujh Pe Pyaar",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Tujh%20Pe%20Pyaar%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Tujh%20Pe%20Pyaar%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 221,
      },
      {
        title: "Kalaastar",
        artist: "Gill Machhrai, Rony Ajnali, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Kalaastar%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kalaastar%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 213,
      },
      {
        title: "Funk Love",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Funk%20Love%20-%20Jhootha%20Kahin%20Ka%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Funk%20Love%20-%20Jhootha%20Kahin%20Ka%20128%20Kbps.mp3",
        duration: 231,
      },
      {
        title: "Dheeth",
        artist: "Gill Machhrai, Rony Ajnali, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Dheeth%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Dheeth%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Kuley Kuley",
        artist: "Yo Yo Honey Singh, Apache Indian, Rony Ajnali, Gill Machhrai",
        imageUrl:
          "https://pagalfree.com/images/128Kuley%20Kuley%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kuley%20Kuley%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 216,
      },
      {
        title: "Payal",
        artist: "Yo Yo Honey Singh, Paradox",
        imageUrl:
          "https://pagalfree.com/images/128Payal%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Payal%20-%20Glory%20128%20Kbps.mp3",
        duration: 192,
      },
      {
        title: "Lets Dance Chotu Motu",
        artist: "Salman Khan, Yo Yo Honey Singh, Devi Sri Prasad, Neha Bhasin",
        imageUrl:
          "https://pagalfree.com/images/128Lets%20Dance%20Chotu%20Motu%20-%20Kisi%20Ka%20Bhai%20Kisi%20Ki%20Jaan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lets%20Dance%20Chotu%20Motu%20-%20Kisi%20Ka%20Bhai%20Kisi%20Ki%20Jaan%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Yadaan",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Yadaan%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Yadaan%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 214,
      },
      {
        title: "Soul",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Soul%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Soul%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 218,
      },
      {
        title: "Khadke Glassy",
        artist: "Yo Yo Honey Singh, Ashok Mastie, Jyotica Tangri",
        imageUrl:
          "https://pagalfree.com/images/128Khadke%20Glassy%20-%20Jabariya%20Jodi%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Khadke%20Glassy%20-%20Jabariya%20Jodi%20128%20Kbps.mp3",
        duration: 229,
      },
      {
        title: "Shor Machega",
        artist: "Yo Yo Honey Singh, Hommie Dilliwala",
        imageUrl:
          "https://pagalfree.com/images/128Shor%20Machega%20-%20Mumbai%20Saga%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Shor%20Machega%20-%20Mumbai%20Saga%20128%20Kbps.mp3",
        duration: 194,
      },
      {
        title: "High On Me",
        artist: "Yo Yo Honey Singh, Talwiinder",
        imageUrl:
          "https://pagalfree.com/images/128High%20On%20Me%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-High%20On%20Me%20-%20Glory%20128%20Kbps.mp3",
        duration: 219,
      },
      {
        title: "Sunny Sunny",
        artist: "Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.mp3",
        duration: 188,
      },
      {
        title: "Pankhudi",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Pankhudi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Pankhudi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 222,
      },
      {
        title: "Yaad",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Yaad%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Yaad%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 187,
      },
      {
        title: "Hide It",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Hide%20It%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Hide%20It%20-%20Glory%20128%20Kbps.mp3",
        duration: 190,
      },
      {
        title: "Aata Majhi Satakli",
        artist: "Yo Yo Honey Singh, Mamta Sharma, Nitu Choudhary",
        imageUrl:
          "https://pagalfree.com/images/128Aata%20Majhi%20Satakli%20-%20Singham%20Returns%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Aata%20Majhi%20Satakli%20-%20Singham%20Returns%20128%20Kbps.mp3",
        duration: 217,
      },
      {
        title: "Aao Raja",
        artist: "Neha Kakkar, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Aao%20Raja%20-%20Gabbar%20Is%20Back%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Aao%20Raja%20-%20Gabbar%20Is%20Back%20128%20Kbps.mp3",
        duration: 187,
      },
      {
        title: "Party With The Bhoothnath",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Party%20With%20The%20Bhoothnath%20-%20Bhoothnath%20Returns%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Party%20With%20The%20Bhoothnath%20-%20Bhoothnath%20Returns%20128%20Kbps.mp3",
        duration: 205,
      },
      {
        title: "Daftar Ki Girl",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Daftar%20Ki%20Girl%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Daftar%20Ki%20Girl%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 232,
      },
      {
        title: "Dheeth",
        artist: "Gill Machhrai, Rony Ajnali, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Dheeth%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Dheeth%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 201,
      },
      {
        title: "Stardom",
        artist: "Yo Yo Honey Singh, Mansheel Gujral, Lil Golu",
        imageUrl:
          "https://pagalfree.com/images/128Stardom%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Stardom%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 217,
      },
      {
        title: "6 Am",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/1286%20Am%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-6%20Am%20-%20Glory%20128%20Kbps.mp3",
        duration: 200,
      },
      {
        title: "Yai Re",
        artist: "Yo Yo Honey Singh, Iulia Vantur",
        imageUrl:
          "https://pagalfree.com/images/128Yai%20Re%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Yai%20Re%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 236,
      },
      {
        title: "KikliKalerdi",
        artist: "Amit Trivedi, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128KikliKalerdi%20-%20Luv%20Shuv%20Tey%20Chicken%20Khurana%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-KikliKalerdi%20-%20Luv%20Shuv%20Tey%20Chicken%20Khurana%20128%20Kbps.mp3",
        duration: 240,
      },
      {
        title: "Hai Apna Dil Toh Awara",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Hai%20Apna%20Dil%20Toh%20Awara%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Hai%20Apna%20Dil%20Toh%20Awara%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Love Dose 2.0(Remix By Shor)",
        artist: "Yo Yo Honey Singh, Shor, Lil Golu",
        imageUrl:
          "https://pagalfree.com/images/128Love%20Dose%202.0%28Remix%20By%20Shor%29%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Love%20Dose%202.0%28Remix%20By%20Shor%29%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 182,
      },
      {
        title: "Kalley Rehen De",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Kalley%20Rehen%20De%20-%20Zorawar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kalley%20Rehen%20De%20-%20Zorawar%20128%20Kbps.mp3",
        duration: 209,
      },
      {
        title: "Care Ni Karda",
        artist: "Sweetaj Brar, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/192Care%20Ni%20Karda%20-%20Chhalaang%20192%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/192-Care%20Ni%20Karda%20-%20Chhalaang%20192%20Kbps.mp3",
        duration: 200,
      },
      {
        title: "Damaa Dam Mast Kalandar",
        artist: "Mika Singh, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Damaa%20Dam%20Mast%20Kalandar%20-%20Welcome%20Back%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Damaa%20Dam%20Mast%20Kalandar%20-%20Welcome%20Back%20128%20Kbps.mp3",
        duration: 181,
      },
      {
        title: "Raat Jashan Di",
        artist: "Yo Yo Honey Singh, Jasmine Sandlas",
        imageUrl:
          "https://pagalfree.com/images/128Raat%20Jashan%20Di%20-%20Zorawar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Raat%20Jashan%20Di%20-%20Zorawar%20128%20Kbps.mp3",
        duration: 225,
      },
      {
        title: "Sambhle",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Sambhle%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sambhle%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 239,
      },
      {
        title: "Millionaire",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Millionaire%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Millionaire%20-%20Glory%20128%20Kbps.mp3",
        duration: 206,
      },
      {
        title: "Sunny Sunny",
        artist: "Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sunny%20Sunny%20-%20Yaariyan%20128%20Kbps.mp3",
        duration: 182,
      },
      {
        title: "Angreji Beat",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Angreji%20Beat%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Angreji%20Beat%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 207,
      },
      {
        title: "Tanning",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Tanning%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Tanning%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 219,
      },
      {
        title: "Pyaar Bhi Jhootha",
        artist: "Tanishk Bagchi, Yo Yo Honey Singh, B Praak, R.D. Burman",
        imageUrl:
          "https://pagalfree.com/images/128Pyaar%20Bhi%20Jhootha%20-%20The%20Miranda%20Brothers%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Pyaar%20Bhi%20Jhootha%20-%20The%20Miranda%20Brothers%20128%20Kbps.mp3",
        duration: 228,
      },
      {
        title: "Punjabiyaan Di Battery",
        artist: "Sachin Gupta, Mika Singh, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Punjabiyaan%20Di%20Battery%20-%20Mere%20Dad%20Ki%20Maruti%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Punjabiyaan%20Di%20Battery%20-%20Mere%20Dad%20Ki%20Maruti%20128%20Kbps.mp3",
        duration: 192,
      },
      {
        title: "Yaar Naa Miley (Remix)",
        artist: "Yo Yo Honey Singh, Jasmine Sandlas",
        imageUrl:
          "https://pagalfree.com/images/128Yaar%20Naa%20Miley%20%28Remix%29%20-%20Kick%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Yaar%20Naa%20Miley%20%28Remix%29%20-%20Kick%20128%20Kbps.mp3",
        duration: 181,
      },
      {
        title: "Kudi Chamkeeli",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Kudi%20Chamkeeli%20-%20Selfiee%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kudi%20Chamkeeli%20-%20Selfiee%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Sheeshe Wali Chunni",
        artist: "Yo Yo Honey Singh, Girik Aman",
        imageUrl:
          "https://pagalfree.com/images/128Sheeshe%20Wali%20Chunni%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Sheeshe%20Wali%20Chunni%20-%20Glory%20128%20Kbps.mp3",
        duration: 203,
      },
      {
        title: "Thumka",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Thumka%20-%20Pagalpanti%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Thumka%20-%20Pagalpanti%20128%20Kbps.mp3",
        duration: 219,
      },
      {
        title: "Bonita",
        artist: "Yo Yo Honey Singh, The Shams",
        imageUrl:
          "https://pagalfree.com/images/128Bonita%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Bonita%20-%20Glory%20128%20Kbps.mp3",
        duration: 225,
      },
      {
        title: "Lonely",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Hamsika Iyer",
        imageUrl:
          "https://pagalfree.com/images/128Lonely%20-%20Khiladi%20786%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lonely%20-%20Khiladi%20786%20128%20Kbps.mp3",
        duration: 218,
      },
      {
        title: "Mein Sharabi",
        artist: "Pritam, Imran Aziz Mian, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Mein%20Sharabi%20-%20Cocktail%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Mein%20Sharabi%20-%20Cocktail%20128%20Kbps.mp3",
        duration: 211,
      },
      {
        title: "Gatividhi",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Gatividhi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Gatividhi%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 206,
      },
      {
        title: "Casanova",
        artist: "Yo Yo Honey Singh, Lil Pump, DJ Shadow Dubai",
        imageUrl:
          "https://pagalfree.com/images/128Casanova%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Casanova%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 189,
      },
      {
        title: "Loveyatri Mashup",
        artist:
          "Asees Kaur, Atif Aslam, Badshah, Darshan Raval, Dev Negi, Divya Kumar, Falguni Pathak, Jubin Nautiyal, Neha Kakkar, Palak Muchhal, Raja Hasan, Udit Narayan, Yo Yo Honey Singh, Lijo George, Tanishk Bagchi, Kaushik-Akash-Guddu (Jam8), Dj Chetas",
        imageUrl:
          "https://pagalfree.com/images/128Loveyatri%20Mashup%20-%20Loveyatri%20-%20A%20Journey%20Of%20Love%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Loveyatri%20Mashup%20-%20Loveyatri%20-%20A%20Journey%20Of%20Love%20128%20Kbps.mp3",
        duration: 233,
      },
      {
        title: "Get Up Jawani",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Get%20Up%20Jawani%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Get%20Up%20Jawani%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 198,
      },
      {
        title: "Lashkare",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Lashkare%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lashkare%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 218,
      },
      {
        title: "Jaam",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Jaam%20-%20The%20Casino%20Song%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Jaam%20-%20The%20Casino%20Song%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 188,
      },
      {
        title: "Rap God",
        artist: "Yo Yo Honey Singh, Handles TDNB, Marvi-Sahiban",
        imageUrl:
          "https://pagalfree.com/images/128Rap%20God%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Rap%20God%20-%20Glory%20128%20Kbps.mp3",
        duration: 224,
      },
      {
        title: "Kanna Vich Waaliyan",
        artist: "Yo Yo Honey Singh, Hommie Dilliwala",
        imageUrl:
          "https://pagalfree.com/images/128Kanna%20Vich%20Waaliyan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kanna%20Vich%20Waaliyan%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 193,
      },
      {
        title: "First Kiss",
        artist: "Yo Yo Honey Singh, Ipsitaa",
        imageUrl:
          "https://pagalfree.com/images/128First%20Kiss%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-First%20Kiss%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 237,
      },
      {
        title: "Rangtaari",
        artist: "Dev Negi, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Rangtaari%20-%20Loveyatri%20-%20A%20Journey%20Of%20Love%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Rangtaari%20-%20Loveyatri%20-%20A%20Journey%20Of%20Love%20128%20Kbps.mp3",
        duration: 224,
      },
      {
        title: "Horn Ok Please",
        artist:
          "Vishal Bhardwaj, Sukhwinder Singh, Yo Yo Honey Singh, Anushka Manchanda",
        imageUrl:
          "https://pagalfree.com/images/128Horn%20Ok%20Please%20-%20Dedh%20Ishqiya%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Horn%20Ok%20Please%20-%20Dedh%20Ishqiya%20128%20Kbps.mp3",
        duration: 237,
      },
      {
        title: "Horn Ok Please",
        artist:
          "Vishal Bhardwaj, Sukhwinder Singh, Yo Yo Honey Singh, Anushka Manchanda",
        imageUrl:
          "https://pagalfree.com/images/128Horn%20Ok%20Please%20-%20Dedh%20Ishqiya%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Horn%20Ok%20Please%20-%20Dedh%20Ishqiya%20128%20Kbps.mp3",
        duration: 202,
      },
      {
        title: "Kudiye Ni Tere",
        artist: "Yo Yo Honey Singh, Khaalif, Harjot Kaur",
        imageUrl:
          "https://pagalfree.com/images/128Kudiye%20Ni%20Tere%20-%20Starfish%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kudiye%20Ni%20Tere%20-%20Starfish%20128%20Kbps.mp3",
        duration: 210,
      },
      {
        title: "Moscow Suka",
        artist: "Yo Yo Honey Singh, Neha Kakkar, Ekaterina Sizova",
        imageUrl:
          "https://pagalfree.com/images/128Moscow%20Suka%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Moscow%20Suka%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 224,
      },
      {
        title: "Aashke",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Aashke%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Aashke%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 205,
      },
      {
        title: "Paris Ka Trip",
        artist: "Yo Yo Honey Singh, Millind Gaba",
        imageUrl:
          "https://pagalfree.com/images/128Paris%20Ka%20Trip%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Paris%20Ka%20Trip%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Habibti",
        artist: "Rony Ajnali, Gill Machhrai, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Habibti%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Habibti%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 216,
      },
      {
        title: "Love Dose",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Love%20Dose%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Love%20Dose%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 213,
      },
      {
        title: "Beautiful",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Beautiful%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Beautiful%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 214,
      },
      {
        title: "Gur Nalo Ishq Mitha",
        artist: "Malkit Singh, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Gur%20Nalo%20Ishq%20Mitha%20-%20The%20Yoyo%20Remake%20-%20Malkit%20Singh%2C%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Gur%20Nalo%20Ishq%20Mitha%20-%20The%20Yoyo%20Remake%20-%20Malkit%20Singh%2C%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 237,
      },
      {
        title: "Ice Cream (Remix By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Palak Muchhal",
        imageUrl:
          "https://pagalfree.com/images/128Ice%20Cream%20%28Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Ice%20Cream%20%28Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 198,
      },
      {
        title: "De Taali",
        artist: "Pritam,Yo Yo Honey Singh,Armaan Malik,Shashwat Singh",
        imageUrl:
          "https://pagalfree.com/images/128De%20Taali%20-%20Bhool%20Bhulaiyaa%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-De%20Taali%20-%20Bhool%20Bhulaiyaa%202%20128%20Kbps.mp3",
        duration: 208,
      },
      {
        title: "ABCD",
        artist: "Pritam, Benny Dayal, Shefali Alvares, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128ABCD%20-%20Yaariyan%20-%20Yaariyan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-ABCD%20-%20Yaariyan%20-%20Yaariyan%20128%20Kbps.mp3",
        duration: 195,
      },
      {
        title: "Fugly (Title Track)",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Fugly%20%28Title%20Track%29%20-%20Fugly%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Fugly%20%28Title%20Track%29%20-%20Fugly%20128%20Kbps.mp3",
        duration: 199,
      },
      {
        title: "Chhori",
        artist: "Yo Yo Honey Singh, Paradox",
        imageUrl:
          "https://pagalfree.com/images/128Chhori%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Chhori%20-%20Glory%20128%20Kbps.mp3",
        duration: 216,
      },
      {
        title: "Suit",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Suit%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Suit%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 227,
      },
      {
        title: "Surroor",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Shalmali Kholgade",
        imageUrl:
          "https://pagalfree.com/images/128Surroor%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Surroor%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 186,
      },
      {
        title: "Birthday Bash",
        artist: "Yo Yo Honey Singh, Alfaaz",
        imageUrl:
          "https://pagalfree.com/images/128Birthday%20Bash%20-%20Dilliwaali%20Zaalim%20Girlfriend%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Birthday%20Bash%20-%20Dilliwaali%20Zaalim%20Girlfriend%20128%20Kbps.mp3",
        duration: 180,
      },
      {
        title: "Kho Sa Gaya Hoon",
        artist: "Manan Bhardwaj, Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Kho%20Sa%20Gaya%20Hoon%20-%20Yaariyan%202%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kho%20Sa%20Gaya%20Hoon%20-%20Yaariyan%202%20128%20Kbps.mp3",
        duration: 193,
      },
      {
        title: "Caliente",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Caliente%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Caliente%20-%20Glory%20128%20Kbps.mp3",
        duration: 238,
      },
      {
        title: "Brown Rang",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Brown%20Rang%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Brown%20Rang%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 235,
      },
      {
        title: "Good Boy",
        artist: "Emiway Bantai, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Good%20Boy%20-%20Emiway%20Bantai%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Good%20Boy%20-%20Emiway%20Bantai%20128%20Kbps.mp3",
        duration: 216,
      },
      {
        title: "Tell Me Once",
        artist: "Alfaaz, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Tell%20Me%20Once%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Tell%20Me%20Once%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 231,
      },
      {
        title: "Banjarey",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Banjarey%20-%20Fugly%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Banjarey%20-%20Fugly%20128%20Kbps.mp3",
        duration: 229,
      },
      {
        title: "Dope Shope",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Dope%20Shope%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Dope%20Shope%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 231,
      },
      {
        title: "Jatt Mehkma",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Jatt%20Mehkma%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Jatt%20Mehkma%20-%20Glory%20128%20Kbps.mp3",
        duration: 216,
      },
      {
        title: "Gabru",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Gabru%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Gabru%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 232,
      },
      {
        title: "Kudi Tu Butter",
        artist: "Gajendra Verma, Vikram Singh, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Kudi%20Tu%20Butter%20-%20Bajatey%20Raho%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kudi%20Tu%20Butter%20-%20Bajatey%20Raho%20128%20Kbps.mp3",
        duration: 235,
      },
      {
        title: "Glassy 2.0",
        artist: "Yo Yo Honey Singh, Ashok Mastie, Jyotica Tangri",
        imageUrl:
          "https://pagalfree.com/images/128Glassy%202.0%20-%20Jabariya%20Jodi%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Glassy%202.0%20-%20Jabariya%20Jodi%20128%20Kbps.mp3",
        duration: 222,
      },
      {
        title: "Kanta Laga",
        artist: "Tony Kakkar, Yo Yo Honey Singh, Neha Kakkar",
        imageUrl:
          "https://pagalfree.com/images/128Kanta%20Laga%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kanta%20Laga%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 198,
      },
      {
        title: "Lets Get It Party",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Lets%20Get%20It%20Party%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lets%20Get%20It%20Party%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 212,
      },
      {
        title: "Desi Kalakaar",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Desi%20Kalakaar%20-%20Desi%20Kalakaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Desi%20Kalakaar%20-%20Desi%20Kalakaar%20128%20Kbps.mp3",
        duration: 211,
      },
      {
        title: "Kuley Kuley",
        artist: "Rony Ajnali, Gill Machhrai, Apache Indian, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Kuley%20Kuley%20-%20Honey%203.0%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Kuley%20Kuley%20-%20Honey%203.0%20128%20Kbps.mp3",
        duration: 183,
      },
      {
        title: "Alcoholic",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Alcoholic%20-%20The%20Shaukeens%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Alcoholic%20-%20The%20Shaukeens%20128%20Kbps.mp3",
        duration: 209,
      },
      {
        title: "Lonely (Remixed By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Hamsika Iyer",
        imageUrl:
          "https://pagalfree.com/images/128Lonely%20%28Remixed%20By%20Kiran%20Kamath%29%20-%20Khiladi%20786%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Lonely%20%28Remixed%20By%20Kiran%20Kamath%29%20-%20Khiladi%20786%20128%20Kbps.mp3",
        duration: 185,
      },
      {
        title: "Fuck Them",
        artist: "Yo Yo Honey Singh, Leo Grewal",
        imageUrl:
          "https://pagalfree.com/images/128Fuck%20Them%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Fuck%20Them%20-%20Glory%20128%20Kbps.mp3",
        duration: 218,
      },
      {
        title: "Shamaan De Vele",
        artist: "Yo Yo Honey Singh, Leo Grewal",
        imageUrl:
          "https://pagalfree.com/images/128Shamaan%20De%20Vele%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Shamaan%20De%20Vele%20-%20Glory%20128%20Kbps.mp3",
        duration: 182,
      },
      {
        title: "Mujh Ko Jaane Do",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Mujh%20Ko%20Jaane%20Do%20-%20International%20Villager%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Mujh%20Ko%20Jaane%20Do%20-%20International%20Villager%20128%20Kbps.mp3",
        duration: 213,
      },
      {
        title: "Superman",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Superman%20-%20Zorawar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Superman%20-%20Zorawar%20128%20Kbps.mp3",
        duration: 186,
      },
      {
        title: "Peeyu Datt Ke",
        artist: "Ritu Pathak, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Peeyu%20Datt%20Ke%20-%20Marjaavaan%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Peeyu%20Datt%20Ke%20-%20Marjaavaan%20128%20Kbps.mp3",
        duration: 196,
      },
      {
        title: "Hai Apna Dil (Desi Remix By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Hai%20Apna%20Dil%20%28Desi%20Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Hai%20Apna%20Dil%20%28Desi%20Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 221,
      },
      {
        title: "Surroor (Remix By Kiran Kamath)",
        artist: "Himesh Reshammiya, Yo Yo Honey Singh, Shalmali Kholgade",
        imageUrl:
          "https://pagalfree.com/images/128Surroor%20%28Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Surroor%20%28Remix%20By%20Kiran%20Kamath%29%20-%20The%20Xpose%20128%20Kbps.mp3",
        duration: 198,
      },
      {
        title: "Ashk",
        artist: "Yo Yo Honey Singh, Tahmina Arsalan",
        imageUrl:
          "https://pagalfree.com/images/128Ashk%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Ashk%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 197,
      },
      {
        title: "Billionaire",
        artist: "Yo Yo Honey Singh, Simar Kaur, Singhsta",
        imageUrl:
          "https://pagalfree.com/images/128Billionaire%20-%20Baazaar%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Billionaire%20-%20Baazaar%20128%20Kbps.mp3",
        duration: 201,
      },
      {
        title: "Note Fenko",
        artist: "Yo Yo Honey Singh",
        imageUrl:
          "https://pagalfree.com/images/128Note%20Fenko%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Note%20Fenko%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3",
        duration: 220,
      },
      {
        title: "Yaar Naa Miley",
        artist: "Yo Yo Honey Singh, Jasmine Sandlas",
        imageUrl:
          "https://pagalfree.com/images/128Yaar%20Naa%20Miley%20-%20Kick%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Yaar%20Naa%20Miley%20-%20Kick%20128%20Kbps.mp3",
        duration: 235,
      },
      {
        title: "Rounds N Ring",
        artist: "Yo Yo Honey Singh, Navaan Sandhu, Bonafide",
        imageUrl:
          "https://pagalfree.com/images/128Rounds%20N%20Ring%20-%20Glory%20128%20Kbps.jpg",
        audioUrl:
          "https://pagalfree.com/musics/128-Rounds%20N%20Ring%20-%20Glory%20128%20Kbps.mp3",
        duration: 219,
      },
    ];

    // Insert songs into the Song collection
    const createdSongs = await Song.insertMany(
      songData.map((song) => ({
        ...song,
        plays: Math.floor(Math.random() * 5000),
      }))
    );

    // Create an album with references to the inserted songs
    const albums = [
      {
        title: "Highlights of honey singh",
        artist: "Yo yo honey singh",
        imageUrl:
          "https://c.saavncdn.com/editorial/Let_sPlayYoYoHoneySinghPunjabi_20240704085318_500x500.jpg",
        releaseYear: 2024,
        songs: createdSongs.map((song) => song._id),
      },
    ];

    // Insert albums into the Album collection
    const createdAlbums = await Album.insertMany(albums);

    // Update songs with albumId reference
    for (let i = 0; i < createdAlbums.length; i++) {
      const album = createdAlbums[i];
      const albumSongs = albums[i].songs;

      await Song.updateMany(
        { _id: { $in: albumSongs } },
        { albumId: album._id }
      );
    }

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
