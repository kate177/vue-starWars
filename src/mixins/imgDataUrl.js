import Formatter from "@/helpers/formatter";

export default {
  computed: {
    dataUrl() {
      return Formatter.dataUrl(
        this.imagePlanets ||
          this.imagePeople ||
          this.imagePlanet ||
          this.imageStarship
      );
    },
  },
};
