<template>
  <outcomes-research-wrapper :_title="`Statistical Power Applet`">
    <outcomes-navbar />
    <div class="wrapper-for-outer-flexbox">
      <div class="description-and-tool">
        <div id="loader"></div>
        <div class="container">
          <div class="graph">
            <div class="minigraph">
              <svg width="100%" height="100%" preserveAspectRatio="none"></svg>
            </div>
            <div class="maingraph">
              <svg width="100%" height="100%" preserveAspectRatio="none"></svg>
            </div>
          </div>
          <div class="controls">
            <div>
              <div class="leftControls">
                <div class="inputContainer">
                  <table>
                    <tr>
                      <td>
                        μ
                        <sub>0</sub>
                        =
                        <input
                          ref="mu0"
                          type="text"
                          id="mu0"
                          autocomplete="off"
                          @change="_validate('mu0')"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        μ
                        <sub>1</sub>
                        =
                        <input
                          ref="mu1"
                          type="text"
                          id="mu1"
                          autocomplete="off"
                          @change="_validate('mu1')"
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        σ =
                        <input
                          ref="std"
                          type="text"
                          id="std"
                          autocomplete="off"
                          @change="_validate('std')"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        d =
                        <input
                          ref="delta"
                          type="text"
                          id="delta"
                          autocomplete="off"
                          @change="_validate('delta')"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        α =
                        <input
                          ref="alpha"
                          id="alpha"
                          autocomplete="off"
                          @change="_validate('alpha')"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        β =
                        <input type="text" id="effectsize" disabled />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        n =
                        <input
                          ref="n"
                          type="text"
                          id="n"
                          autocomplete="off"
                          @change="_validate('n')"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Power =
                        <input
                          ref="power"
                          type="text"
                          id="power"
                          autocomplete="off"
                          @change="_validate('power')"
                        />
                      </td>
                    </tr>
                  </table>
                  <div class="samplebutton" @click="sample">Sample</div>
                </div>
              </div>
              <div class="rightControls">
                <div id="slider-vertical2" class="shell">
                  <div class="inner label">
                    P
                    <br />
                    o
                    <br />
                    w
                    <br />
                    e
                    <br />
                    r
                  </div>
                </div>
                <div id="slider-vertical1" class="shell">
                  <div class="inner label">n</div>
                </div>
              </div>
            </div>
            <div class="consoleContainer">
              <div class="console"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <outcomes-footer :copyright="copyright" />
  </outcomes-research-wrapper>
</template>

<script>
import {
  startSpinningWheel,
  sample,
  setValuesNew,
  prepare,
} from './assets/javascript/curves'
import { validate } from './assets/javascript/validation'

export default {
  name: 'App',
  components: {},
  mounted() {
    startSpinningWheel()
    addEventListener('resize', prepare)
  },
  data() {
    return {
      copyright: `© 2018 Washington University School of Medicine, St. Louis, Missouri`,
    }
  },
  methods: {
    sample() {
      sample()
    },
    _validate(id) {
      const { value } = this.$refs[id]
      validate({ [id]: value }) && setValuesNew({ [id]: value })
    },
  },
}
</script>

<style>
@import './assets/css/spinner.css';
@import './assets/css/style.css';
@import './assets/css/wrapper-style.css';
</style>
