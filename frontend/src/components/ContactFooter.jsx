import { GiFlowerTwirl } from "react-icons/gi";
import Accordion from "./Accordian";

const accordionItems = [
  {
    title: "What is AI?",
    content:
      "Artificial Intelligence (AI) is the simulation of human intelligence by machines, especially computers, enabling them to perform tasks that typically require human cognition, such as problem-solving, learning, and decision-making. AI systems use algorithms and vast data sets to recognize patterns, make predictions, and adapt over time, improving their performance with experience. There are two main types: narrow AI, designed for specific tasks like image recognition or language translation, and general AI, which could perform any intellectual task a human can.",
  },
  {
    title: "How can i listen to your podcast",
    content:
      "You can listen to our podcast directly on our website by visiting the Episodes or Listen Now section, where you'll find each episode available for streaming. Additionally, we’re available on popular platforms like Spotify, Apple Podcasts, and Google Podcasts—just search for our show’s name and hit subscribe to stay updated. For mobile listeners, you can download episodes in these apps to enjoy offline. Don’t forget to follow us on social media for updates on new releases and special content.",
  },
  {
    title: "Are your Podcast free to listen to?",
    content:
      "Yes, our podcast is completely free to listen to! All episodes are available for streaming or download on our website and major platforms like Spotify, Apple Podcasts, and Google Podcasts at no cost. We aim to make our content accessible to everyone, though some platforms may require a free account to subscribe and receive updates. If you're enjoying our podcast, consider supporting us by sharing it with friends or leaving a review—your support helps keep it free for all listeners!",
  },
  {
    title: "Can i download episodes to listen offline?",
    content:
      "Yes, you can download episodes to listen offline! Most platforms where our podcast is available, like Spotify, Apple Podcasts, and Google Podcasts, offer an option to download episodes directly to your device. Just click on the download button next to each episode, and it will save to your app, allowing you to listen anytime, even without an internet connection. This is perfect for on-the-go listening, whether you're traveling or just want uninterrupted access to our episodes.",
  },
  {
    title: "How often do you release new episodes?",
    content:
      "We release new episodes every week to keep you updated with fresh content regularly. Typically, episodes go live on every Sunday, so you can look forward to new discussions on a consistent schedule. Be sure to subscribe on platforms like Spotify, Apple Podcasts, or Google Podcasts, so you receive notifications as soon as a new episode is available!",
  },
];

function ContactFooter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3">
      <div className="m-auto box-border flex flex-col items-center justify-start gap-3 p-6">
        <GiFlowerTwirl size={32} fill="yellow" />
        <p className="text-wrap text-lg font-bold sm:text-3xl">
          Get In Touch with AI Podcast.
        </p>
      </div>
      <div className="box-border p-6 sm:col-span-2 sm:col-start-2">
        <Accordion items={accordionItems} />
      </div>
    </div>
  );
}

export default ContactFooter;
