import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Dynamaxed",
})
export default class Dynamaxed extends Vue {
  render() {
    return (
      <div>
        <p>
          In the autumn of 2019 my younger brother asked me how to make their
          own Pokemon Games. After fiddling around with the given tools (Advance
          Map, EliteMap, among others), I realize that in this space a proper
          editor is missing. I had plans for a more modern version of Advance
          Map since at least 2010. The biggest issue with the existing tools was
          that they all relied on users to find free spaces in memory and modify
          the ROM file in place. And this proved to be very problematic, because
          the heuristic for finding free memory wasn't perfect, and working with
          this inplace editing without any kind of undo functionality was a
          risky endeavor where one small mistake could destroy all your efforts.
        </p>

        <p>
          In 2010 therefore I had an idea for a new project: Take a ROM file,
          extract all the data that could be changed into XML files that
          constitute a project. Then, you could work on those XML files with any
          kind of editor and in the end you'd just hit compile and it would
          rebuild the ROM using those files. I even had a name for it already:
          Articuno Map Editor, it would be written with Qt and look very cool
          (in my head). But I never even started work on it. Other projects at
          the time and my losing interest in the Pokemon Series games would mean
          it would take till 2019 when I actually followed suit on that premise.
        </p>

        <p>
          In 2019 I thought about what programming language to write such a tool
          in. C# would have been ideal since at that time I didn't really know a
          lot about it and I could have used this project in order to improve my
          C# skills to work on Unity3D projects later (for which C# is the ideal
          language). But C# doesn't really have a lot of options for User
          Interface. It turned out that the most popular ones were WinForms and
          WPF, but both of these were Windows only and I wanted it to be cross
          platform. Anyway, I settled with WPF for now (with the idea to change
          it later to an Open Source frame work once I got more comfortable with
          the language and the frameworks), and started writing a bit of code.
        </p>

        <p>
          For those unfamiliar with modding ROMs, it mostly comes down to
          finding offsets to memory locations at which the data is stored, and
          then either modifying said data or the offset to point to new data at
          a different place in the ROM. In other words, I needed to know what I
          wanted to edit, and I needed to know what the offsets where, were I
          could find the data. My brother wanted the ability to rebalance the
          trainers, so that's where I wanted to start. I looked in the common
          tools I had (most of them part of the EliteMap tool kit) but it turned
          out none of them had actual trainer data for the ROM that I wanted to
          work on (the offsets are different for different language versions of
          the game as well as the different games). When I researched this data
          on the Internet I found a mysterious project called PRET. It turned
          out that someone already went through all the effort of decompiling
          the games. And not only that, with Porymap, they even had their own
          map editor already and it was miles ahead from Advance Map (in terms
          of mapping capabilities at least).
        </p>

        <p>
          In some sense this was like a dream come true, but in another way,
          this made my original project idea useless. If there was already a way
          to build the entire game from scratch using C, then why was anyone
          even still be using Advance Map?! Over Discord, I excitedly told my
          brother about this project and how it's gonna change modding the games
          completely and that he would literally be able to do whatever he wants
          with it! He of course only wanted to change the trainers, so I tried
          to teach him how to work with the .c and .h files. But it turned out
          that the project wasn't as neatly organized as I hoped. Now, I'm not
          criticizing the way the project is organized (although there are some
          problems with it which are currently getting resolved), but it wasn't
          very good for this purpose. In particular, changing the trainer data
          was going to be difficult, because they were spread over so many
          different files with different syntaxes. And my brother is not a
          programmer.
        </p>

        <p>
          The PRET project was awesome, but it needed some structure, and it
          needed an editor that would allow anyone without any experience to
          jump right into modding these games.
        </p>

        <p>
          I decided to drop the original idea of doing it in C# and instead went
          for my usual Typescript + Vue.js stack which allowed me to write
          better code and especially a much more intriguing frontend. The UI
          design was actually the first big pain point of this tool.
        </p>

        <p>
          I quickly realized that in order for this project to work, I needed a
          .json file with all the information of all the trainers in it, and
          then a generator which would create the .c and .h files from it.
          Creating that was actually a joy to do. IntelliJ's Search and Replace
          functionality that allows you to use complex Regular Expressions made
          it a fun exercise to transform the original data into JSON, and I
          created a tool set to automatically transform that JSON back into C
          Header files.
        </p>
      </div>
    );
  }
}
