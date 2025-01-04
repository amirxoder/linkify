import useSound from "use-sound";

export const useAudio = () => {
  const [play1] = useSound("/audios/notification.mp3");
  const [play2] = useSound("/audios/notification2.mp3");
  const [play3] = useSound("/audios/sending.mp3");
  const [play4] = useSound("/audios/sending2.mp3");

  const playSound = (sound: string) => {
    switch (sound) {
      case "notification.mp3":
        play1();
        console.log("playing", sound);
        break;
      case "notification2.mp3":
        play2();
        console.log("playing", sound);
        break;
      case "sending.mp3":
        play3();
        console.log("playing", sound);
        break;
      case "sending2.mp3":
        play4();
        console.log("playing", sound);
        break;
      default:
        break;
    }
  };

  return { playSound };
};
