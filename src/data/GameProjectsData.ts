import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "RPGame", "img/projects/RPG_01.jpg", 
    `
    <div class="paragraph">
     <strong>RPGame</strong> is showcase of fully-scalable modular rpg elements.Currently has a basic combat system with a few skills and a few enemies.

    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/F2yASvjp-Sk" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Easy to read blueprint structure which can easily built off of</li>
        <li>Includes NPC behaviour(Roaming,Tracking,Attacking) through the use of AI</li>
        <li>Hitbox detection is implemented for attacks</li>
        <li>The entire showcase is made with blueprints</li>
        <li>Attributes, abilities, and even status effects can be built with the current system</li>
        <li>Inspired by the GAS system plugin from Unreal Engine 5</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/RPG_03.jpg" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="img/projects/RPG_04.jpg" alt="Optimistic Chubby Screenshot" />
    </div>
    `, "#23bd69", true),


    new ProjectData("project-2", "Gears", "img/projects/Gears_Logo.png", `
    <div class="paragraph">
        <strong>Gears</strong> is primarily an early-stage interactive application and rendering engine for Windows. Currently in development.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Implemented in C++</li>
        <li>Window docking ,minimizing ,etc implemented</li>
        <li>Graphics rendering</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Source code is available on <a href="https://github.com/AakashR13/Gears-GameEngine.git" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Gears_01.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Gears_02.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Gears_03.jpg" alt="Singing Addict Screenshot" />
    </div>
    `, "#5a78af"),

    new ProjectData("project-3", "Phasmonauts", "img/projects/Blaster_06.jpg", `
    <div class="paragraph">
        <strong>Phasmonauts</strong> is a Third-Person Shooter multiplayer game made in Unreal Engine 5. Currently in development.

        </div>


    <div class="paragraph">
        Main features :
        <ul>
        <li>Built as a combination of blueprints and C++</li>
        <li>Multiplayer capabilities</li>
        <li>Multiple Weapons,Pick-ups,Game Modes,etc</li>
        <li>Implements lag compensation techniques</li>
        </ul>
    </div>



    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Blaster_01.jpg" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Blaster_03.jpg" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Blaster_07.jpg" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="img/projects/Blaster_05.jpg" alt="Drawing Overload Screenshot" />
    </div>
    `, "#383838"),

    new ProjectData("project-4", "Shoot Em Up", "img/projects/Shooter_01.jpg", `
    <div class="paragraph">
    <strong>Shoot Em Up</strong> is a Third Person Shooter made in Unreal Engine 5. It is a showcase of the engine's capabilities.
    </div>

    <div class="paragraph center">
            <iframe class="youtube" src="https://youtube.com/embed/UBKRXhE5D8M" frameborder="0" allowfullscreen></iframe>
        </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Built completely in C++</li>
        <li>Includes NPC behaviour(Patrolling,Tracking,Attacking) through the use of AI</li>
        <li>Startup Menu</li>
        </ul>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Shooter_05.jpg" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="img/projects/Shooter_03.jpg" alt="Eugeneable Screenshot" />
    </div>
    `, "#e80fb7"),

    new ProjectData("project-6", "Creek", "img/projects/Creek_03.jpg", `
    <div class="paragraph">
        <strong>Creek</strong> is a demo of Unreal Engine 5's capabilities. It is a showcase of the engine's capabilities.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Showcases graphics capabilities of Unreal Engine 5</li>
        </ul>
    </div>


    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Creek_01.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/Creek_02.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/Creek_04.jpg" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246"),

    new ProjectData("project-5", "Cloud Jump", "img/projects/CloudJump_05.png", `
    <div class="paragraph">
        <strong>Cloud Jump</strong> 3D Platformer made in Unreal Engine 5.
    </div>

    <div class="paragraph center">
            <iframe class="youtube" src="https://youtube.com/embed/Y7rwIbG3GRk" frameborder="0" allowfullscreen></iframe>
        </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>Built completely in Blueprints</li>
        <li>Spawn point system implemented</li>
        <li>Obstacle course with hazards and spinning platforms!</li>
        </ul>
    </div>



    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/CloudJump_01.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/CloudJump_02.jpg" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="img/projects/CloudJump_03.jpg/" alt="Cloud Drew Land Screenshot" />
    </div>`, "#e48246")
];