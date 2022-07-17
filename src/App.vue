<template>
  <outcomes-research-wrapper :_title="`Statistical Power Applet`">
    <div class="deprecated">
      <div class="inner-wrapper">
        <h2 class="no-top-spacing">Statistical Power Applet is deprecated.</h2>
        <!-- <div class="grid"> -->
        <img src="./assets/img/legacy-image.png" class="legacy-image" />
        <p class="grey">
          The
          <span class="italic"
            >Designing Clinical and Outcomes Research Workshop</span
          >
          at Washington University in St. Louis School of Medicine no longer
          uses the Statistical Power Applet in its instruction.
        </p>
        <hr />
        <p class="grey">
          Students are now recommended to use the G*Power applet, which offers a
          greater variety of tests and features to explore statistical power.
        </p>
        <p class="grey">
          G*Power is a statistical power analysis application for Mac and
          Windows, produced and maintained by Universität Düsseldorf. More
          information about the tool is available at
          <a :href="gpowerLink">their website</a>, including an installation
          link in the "Download" section.
        </p>
      </div>
    </div>
  </outcomes-research-wrapper>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gpowerLink:
        "https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower",
    };
  },
};
</script>

<style>
.deprecated {
  margin: 20pt;
  margin-left: auto;
  margin-right: auto;
  font-family: "Roboto", sans-serif;
  border-radius: 5px;
  width: max-content;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  max-width: 100%;
  width: 600px;
}

.italic {
  font-style: oblique;
}

.inner-wrapper {
  padding: 10pt;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  max-width: 100%;
}

.legacy-image {
  /* object-fit: cover; */
  /* width: 400px; */
  max-width: 100%;
  border-radius: 2.5px;
}

.no-top-spacing {
  padding-top: 0px;
  margin-top: 0px;
}

.grey {
  color: rgb(50, 50, 50);
}

@media screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .legacy-image {
    width: 100%;
  }
}
</style>
