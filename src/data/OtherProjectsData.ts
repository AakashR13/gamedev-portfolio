import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Cheat Codes", "img/projects/CheatCodes_01.jpeg", `
    <div class="paragraph">
      <strong>Cheat Codes</strong> is my club's flagship event conducted every year for our university's annual cultural fest.
      <br/><a href="" target="blank"></a>
            </div>
            <div class="paragraph center">
            <iframe class="youtube" src="https://youtube.com/embed/j-lzF4-5a_I" frameborder="0" allowfullscreen></iframe>
        </div>
          <div class="paragraph">
            Main features :
            <ul>
            <li>3 Days of tournaments and other fun events! </li>
            <li>One of the biggest events at our fest </li>
            <li>Our sponsor Electronic Arts reviewed our event highly</li>
            </ul>
        </div>

        <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/CheatCodes_01.jpeg" alt="Cheat Codes Screenshot" />
          <img class="pc-screenshot" src="img/projects/CheatCodes_03.jpeg" alt="Cheat Codes Screenshot" /> 
          <img class="pc-screenshot" src="img/projects/CheatCodes_02.jpeg" alt="Cheat Codes Screenshot" />
        </div>
    `, "#c10606", false, true),
    new ProjectData("project-7", "Tree-Walker", "img/projects/project-7-icon.png", `
    <div class="paragraph">
                <strong>TreeWalker</strong> consists of a versatile and adaptible tree search library with the ability to simply change the exploration strategy (and hence the search algorithm) by changing a single function in the code, i.e. the comparator.
            </div>

            <div class="paragraph">
            Search algorithms implemented:
              <ul>
              <li>Breadth-First Search (code: bfs)</li>
              <li>Depth-First Search (code: dfs)</li>
              <li>Greedy Search (code: greedy)</li>
              <li>Greedy Search favoring the larger value (code: greedymax)</li>
              <li>Group Project</li>
              </ul>
          </div>

          <div class="paragraph">
          Additional Features:
              <ul>
              <li>ASCII tree printing.</li>
              <li>Ability to set the search algorithm using a command line option.</li>
              <li>Ability to add and define custom search methods.</li>
              <li>Ability to toggle whether analysis statistics and plotted graphs are shown.</li>
              <li>Automatic graph plotting (if analysis is enabled).</li>
              <li>Optional ability to pass input files with different names (apart from the default input file) using a command line option.</li>

              </ul>
          </div>
          <div class="paragraph">
          <div class="notice">
            Source code available on <a href="https://github.com/AakashR13/TreeWalker.git" target="_blank">GitHub</a>.
          </div>
        </div>

            <div class="paragraph center">
                
            </div>`, "#1ca1e2"),

    new ProjectData("project-8", "SP_Graphs", "img/projects/SP_04.png", `
    <div class="paragraph">
                The aim of <strong>SP_Graphs</strong> is to be able to perfectly reconstruct a given graph(directed or undirected). Formulating a proper sampling theory(which works on both directed and undirected graphs) is the main objective of this paper.
            </div>


          <div class="paragraph">
          Main features :
          <ul>
          <li>This paper covers sampling through the usage of discrete signal processing and uses simple linear algebra</li>
          <li>also covers the the process in which the sampling operator is designed for a given graph</li>
          <li>We generally search for the qualified sampling operator which is designed to guarantee perfect recovery and robustness to noise</li>
          </ul>
      </div>
      <div style="margin-top:20px; margin-bottom:20px;">
      <a class="download-link" href="d/Discrete Signal Processing on Graphs_Sampling Theory Report.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
      <div style="clear:both"></div>
    </div>
            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/AakashR13/Signal_Processing_Graphs.git" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="img/projects/SP_01.jpg" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="img/projects/SP_02.png" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="img/projects/SP_03.png" alt="The Art of Walking Screenshot" />
            </div>`),

    new ProjectData("project-9", "Morse Transceiver", "img/projects/Morse_05.jpeg", `
     <div class="paragraph">
                <strong>Morse Transceiver</strong> is a project in which we communicate between 2 devices through optical means of communication.
            </div>
      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/MorseTransceiverReport.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download Report as PDF</a>
        <div style="clear:both"></div>
      </div>
      <div class="paragraph center">
            <iframe class="youtube" src="https://youtu.be/j-lzF4-5a_I" frameborder="0" allowfullscreen></iframe>
        </div>
            <div class="paragraph">
        Main features :
        <ul>
        <li>Text is converted from one end into morse code, passed through, picked up and decoded back into text</li>
        <li>This is done using Arduinos and a self-made app(Bluetooth integration)</li>
        <li>A dictionary is used to code the sequence while a binary tree for decoding</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/AakashR13/Morse-Transceiver" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="img/projects/Morse_01.jpg" alt="The Art of Walking Screenshot" />
            </div>`
            ),
];