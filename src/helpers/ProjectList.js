
import AthanPi from "../assets/gallery/Pi.jpg";
import M4 from "../assets/gallery/M4.jpg";
import Arduino from "../assets/gallery/Arduino_uno.png";


const projects = [
    {
      id: 1,
      title: 'Athan Pi',
      group: 'hardware',
      description: 'A DAC based on a Rasberry Pi zero 2 w. Plays the athan through an AUX port at the appropriate timings and gives iqama reminders.',
      image: AthanPi,
      imageType: 'landscape-img',
      link: 'https://github.com/M02men0/athanPi',
      badge_1: 'Rasberry Pi',
      badge_2: 'Python',
    },
    {
      id: 2,
      title: "Robotic arm tracer",
      group: "hardware",
      description: "Project still in the works, Working on a robotic arm that track drones and other.. Gun mounts on top",
      image: M4,
      imageType: 'landscape-img',
      link: "https://github.com/M02men",
      badge_1: "Arduino",
      badge_2: "C++",
    },

    {
      id: 10,
      title: "Arduino Weather Station",
      group: "hardware",
      description: "tells the weather",
      image: Arduino,
      imageType: 'landscape-img',
      link: "https://github.com/M02men",
      badge_1: "Arduino",
      badge_2: "C++",
    },
  ];

  export default projects;
