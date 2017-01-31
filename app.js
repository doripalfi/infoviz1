/**
 * Created by dorapalfi on 31/01/17.
 */
var main = function() {


    var full_data = [[4.78, 7.0, '40B8AF', 'Aldor', 'I have great interest in visual design and filmmaking.'], [4.67, 6.0, '40B8AF', 'Aragorn', "I have been an aviation enthusiast since I was a kid, although I do not hold a pilot's license (yet). I enjoy cooking and I try to follow a healthy lifestyle with regular physical activity, such as cycling, running or team sports, mostly football. I have developed an increasing interest in all sorts of water-sports over the past few years, mostly in free-diving and surfing. I have an appreciation for all art forms but I am far from being an art-savvy."], [4.33, 6.33, 'B2577A', 'Arwen', ''], [4.11, 5.0, '40B8AF', 'Balin', 'Some hobbies would be graphic design and 3D modeling.'], [4.5, 5.33, '40B8AF', 'Bereg', 'Science, sports, fashion, travel'], [5.56, 8.0, 'B2577A', 'Bifur', "25 year old student doing my 4th/5th year. I'm outgoing as a person and I like to learn new things and challenge myself. Recently took a gap year traveling in Asia and later on studying in Australia. I like graphic illustration, I'm self-taught and it's more of a hobby. Otherwise I've recently started going to events/hackatons in my spare time. Mostly related to helping organisations develop ideas and prototypes by the use of technology. Also looking forward to the Crash Bandicoot on PS4 game release!"], [6.61, 7.33, 'B2577A', 'Bilbo', 'JavaScript interests me. Alongside my education, I like to work on freelance projects to pay my bills and open source projects to give back. I am a huge fan on reading content related to design process and especially typography.'], [5.78, 5.67, 'B2577A', 'Bofur', ''], [4.67, 5.33, 'ADFF2F', 'Bombadil', 'travel, sports, running, yoga, cycling, photography, coffee, gender equality, diversity, education, human rights'], [4.72, 6.33, '40B8AF', 'Bombur', 'I like football and play on the school team. I also like painting, illustrating and programming.'], [4.39, 6.67, '40B8AF', 'Borin', 'Reading, music, arts, bikes, travel, technology, programming, humor.'], [4.39, 5.67, 'B2577A', 'Boromir', 'Web Development, Competitive Programming, Data Science (Machine learning)'], [5.61, 7.67, 'B2577A', 'Bounder', 'Arts and culture, education, science and technology'], [6.06, 6.33, '40B8AF', 'Celeborn', "I'm interested in digital democracy, digital literacy, accessibility, usability and those kinds of questions. I also like stuff like tv-shows, travelling and cooking food."], [4.83, 5.67, '40B8AF', 'Damrod', ''], [3.67, 4.67, 'B2577A', 'Deagol', 'Reading, magic(illusions), training, nature'], [4.67, 7.67, 'B2577A', 'Denethor', ''], [5.22, 5.67, '40B8AF', 'Dorlas', ''], [4.56, 5.67, '40B8AF', 'Dwalin', "I'm interested in music, dance, traveling, and more."], [5.39, 8.33, '40B8AF', 'Eldarion', 'Play music & watch sports'], [5.67, 6.0, 'B2577A', 'Elendil', "I like being creative, mostly with computers and programs. I've spend a lot of time the recent years doing code, illustrations, 3D-models any much more. I also love consuming stories in the forms of books, games and movies."], [5.0, 5.67, '40B8AF', 'Elendur', ''], [4.94, 7.0, 'ADFF2F', 'Elrond', 'Skiing, Computer Games, Working out at the gym, Programming.'], [5.78, 8.0, 'B2577A', 'Eomer', 'Interested in art and music (as a hobby), machine learning (academically).'], [6.17, 8.67, 'B2577A', 'Eothain', "Interests are music, programming and computer graphics. I'm a huge fan of old console video games, and still, nothing beats a really good platformer. I want to create stuff that people can benefit from, and hopefully make the world somewhat of a better place."], [4.89, 4.0, 'B2577A', 'Eowyn', 'Photography and Traveling.'], [5.11, 7.33, 'B2577A', 'Faramir', 'Sketching, Hacking stuff, Cooking'], [5.17, 5.33, 'B2577A', 'Ferny', 'Graphic design, photography, bartending'], [4.33, 5.0, 'ADFF2F', 'Fili', 'Programming, android application development.'], [4.83, 6.0, '40B8AF', 'Freda', 'Startups and arts especially photography'], [4.39, 4.67, 'B2577A', 'Frodo', "I like to work with graphics and stuff where you actually see what yo're accomplishing. I like to spend time with friends and climb on my spare time"], [5.39, 8.0, 'B2577A', 'Galadriel', 'I have been working a programmer in the mobile space for the past 4 years before I joined master school here at KTH. I am extremely interested in how programming plays its role in creating art forms and that design married with technology can produce amazing experiences. I play basketball and enjoy equestrian sports a lot. I code on hobby projects when I am free and that had led me to pursue a startup earlier as well.'], [5.44, 5.0, 'B2577A', 'Gamgee', 'I like playing computer games and hanging with my girlfriend'], [4.89, 7.67, 'B2577A', 'Gandalf', ''], [4.56, 3.67, '40B8AF', 'Gimli', 'Diving, wildlife and painting'], [3.33, 3.67, 'B2577A', 'Gollum', "When people ask me what interests me, I often answer saying that I am inherently curious. With that I mean I'm interest in basically everything that crosses my path, from science to arts to stupid internet things. Now, on a deeper level, academically speaking, I like to think about how technology and society interact, how this things we create end up shaping us. in fact that is the reason I left Brazil to study here. \nAs for hobbies, in my spare time lately I have been trying to learn how to code (basically JavaScript and HTML). Also, I am passionate about music (I used to play guitar and violin) and in the past months I have grown an interest on cooking."], [4.17, 6.33, 'B2577A', 'Gorbag', "I did my Bachelor in Computer Engineering and worked for almost 3 years as a software developer. Even though I love programming, I realised that programming on a topic that I have no interest in, is really depressing. So I applied to KTH and moved to Stockholm to learn more about a topic I'm interested on programming.\n\nI like playing video games in my free time. I can be found browsing Steam for survival, city-building games or indie games. I follow most of AAA titles too. I also watch movies, tv-series and read books. And recently, I got inspirited by a book I've read and started baking cookies (random :) ) ."], [4.78, 5.33, 'B2577A', 'Grimbold', 'Cooking, eating, enjoying beer'], [4.94, 6.67, 'B2577A', 'Grishnakh', 'Machine Learning and drinking beer'], [4.44, 3.67, 'B2577A', 'Haldir', 'Kitesurfing, Freediving, Surfing, Skiing and Product Development'], [3.5, 4.33, '40B8AF', 'Haleth', "I'm interested in HCI and front end programming. My hobbies are reading and watching youtube."], [5.61, 8.33, 'B2577A', 'Hama', 'Have basic knowledge about C C++ and program softeware ex. UE4, unity, visual studio'], [6.33, 6.67, '40B8AF', 'Hardang', ''], [5.11, 6.0, 'B2577A', 'Idril', ''], [5.17, 6.0, 'B2577A', 'Irolas', 'Astronomy, virtual reality, gaming, music'], [5.11, 6.33, 'B2577A', 'Isildur', 'Game development, creating music, creative work'], [4.94, 5.0, 'B2577A', 'Kili', 'Watch documentaries, badminton, food'], [4.94, 6.67, 'B2577A', 'Legolas', 'Already work as developer for 8 years, full-stack, mostly front-end. I like developing web applications with new technologies (angularjs, bootstrap,...). Hobbies are: football, hunting & woodcrafting.'], [4.33, 4.0, 'B2577A', 'Lindir', 'I like photography and to play music. I like good design and functional tecnology.'], [4.5, 6.33, 'B2577A', 'Lurtz', 'rock climbing, reading, drinking coffee'], [5.28, 5.33, 'B2577A', 'Madril', 'I like photography, music and new technology / technology related services/products.'], [5.11, 6.0, '40B8AF', 'Maiar', 'I like programming (outside of school) when I get the time. As of late I have also become interested in savings/stocks and so on (still a novice though, but it can be fun at times). Other than that I like to paint (everything from walls to sketching a Disney character), used to play football but injuries happen so had to quit.'], [5.5, 7.0, '40B8AF', 'Mauhur', 'I always strive for progress, as a person and for my skills. I currently want to learn a lot about programming! My other interests are reading, socializing, drawing & computer games'], [5.94, 6.67, '40B8AF', 'Merry', 'I like exploring the world and face challenges. I love drawing and cooking.'], [5.56, 6.0, 'B2577A', 'Morwen', "I'm very active in sports.  I'm practicing a sport called trampoline which I do at an elite level meaning I'm in the national team of Sweden and I get to compete in Nordic, European and World Championships. Apart from sports I play video games,  I fiddle around in Unity and compose as well as produce music on my own using Propellerheads Reason DAW. I like to learn a little about everything."], [3.17, 1.67, '40B8AF', 'Nessa', "Interested in design. Also interested in incorporating environmental beneficial media technology artefacts in homes and businesses (wrote my bachelor thesis about Smart homes), that's one of the reasons I chose this course. In my spare time I photograph and film for fun."], [1.83, 3.0, 'B2577A', 'Ohtar', 'My interests are technology, science, computers, games, nature and fitness.'], [4.78, 8.0, 'B2577A', 'Oin', 'Music, piano, asian culture'], [6.78, 7.33, 'B2577A', 'Otho', ''], [4.94, 4.33, 'B2577A', 'Pelendur', 'Drumset'], [4.28, 6.33, 'B2577A', 'Pippin', 'Art, design, computer games, programming'], [4.61, 4.67, '40B8AF', 'Quickbeam', "I am interested in design overall, both product design and graphic design. Beside my studies, I am working as Art Director for the THS Union Sports Association. I am also helping small companies with logos and some printed material. In my spare time I work in a mens clothing store, I travel as much as I can and I also try to photograph as much as I can on my travels. I have an older brother that I think you might recognize a graduated KTH student whos visualization skills I'm trying to learn from."], [4.28, 5.33, 'B2577A', 'Rian', "I'm a huge gamer, love boardgames and videogames. Also pretty big into art in general, books and movies and music."], [5.06, 7.33, '40B8AF', 'Sam', ''], [5.5, 6.67, 'B2577A', 'Sauron', 'Sports, dancing, hiking, travelling'], [4.39, 3.67, 'ADFF2F', 'Shagrat', 'Sports, movies and tv-series, art.'], [3.72, 4.67, 'ADFF2F', 'Shark', ''], [5.11, 7.67, 'B2577A', 'Smaug', 'Technologies, innovation, creating a product not only being fancy but also useful.'], [5.56, 6.0, '40B8AF', 'Smeagol', 'History and statistics, video games and films, digital painting, cooking.'], [4.22, 5.33, 'ADFF2F', 'Theoden', 'Creative designs and ideas in Computer Games or Applications. \nNo hobbies but am interested in many things.'], [5.28, 8.33, 'B2577A', 'Theodred', 'I enjoy brewing beer, playing around with OpenGL and warm weather!'], [6.78, 8.0, 'B2577A', 'Thorin', 'Music (I play guitar decently enough and am a singer, though a pretty mediocre one. And my favourite song atm is this one: https://www.youtube.com/watch?v=tlAiq0_BXac ), Photography, Hiking'], [5.61, 6.0, 'B2577A', 'Ugluk', 'Movies, video games and ice hockey!'], [6.0, 8.67, 'B2577A', 'Uruk', 'Gokarting, cooking, manga/anime, basketball, horror movies, reading fiction novels']];

    var cat1_data = [[4.67, 5.33, 'ADFF2F', 'Bombadil', 'travel, sports, running, yoga, cycling, photography, coffee, gender equality, diversity, education, human rights'], [4.94, 7.0, 'ADFF2F', 'Elrond', 'Skiing, Computer Games, Working out at the gym, Programming.'], [4.33, 5.0, 'ADFF2F', 'Fili', 'Programming, android application development.'], [4.39, 3.67, 'ADFF2F', 'Shagrat', 'Sports, movies and tv-series, art.'], [3.72, 4.67, 'ADFF2F', 'Shark', ''], [4.22, 5.33, 'ADFF2F', 'Theoden', 'Creative designs and ideas in Computer Games or Applications. \nNo hobbies but am interested in many things.']];

    var cat2_data = [[4.33, 6.33, 'B2577A', 'Arwen', ''], [5.56, 8.0, 'B2577A', 'Bifur', "25 year old student doing my 4th/5th year. I'm outgoing as a person and I like to learn new things and challenge myself. Recently took a gap year traveling in Asia and later on studying in Australia. I like graphic illustration, I'm self-taught and it's more of a hobby. Otherwise I've recently started going to events/hackatons in my spare time. Mostly related to helping organisations develop ideas and prototypes by the use of technology. Also looking forward to the Crash Bandicoot on PS4 game release!"], [6.61, 7.33, 'B2577A', 'Bilbo', 'JavaScript interests me. Alongside my education, I like to work on freelance projects to pay my bills and open source projects to give back. I am a huge fan on reading content related to design process and especially typography.'], [5.78, 5.67, 'B2577A', 'Bofur', ''], [4.39, 5.67, 'B2577A', 'Boromir', 'Web Development, Competitive Programming, Data Science (Machine learning)'], [5.61, 7.67, 'B2577A', 'Bounder', 'Arts and culture, education, science and technology'], [3.67, 4.67, 'B2577A', 'Deagol', 'Reading, magic(illusions), training, nature'], [4.67, 7.67, 'B2577A', 'Denethor', ''], [5.67, 6.0, 'B2577A', 'Elendil', "I like being creative, mostly with computers and programs. I've spend a lot of time the recent years doing code, illustrations, 3D-models any much more. I also love consuming stories in the forms of books, games and movies."], [5.78, 8.0, 'B2577A', 'Eomer', 'Interested in art and music (as a hobby), machine learning (academically).'], [6.17, 8.67, 'B2577A', 'Eothain', "Interests are music, programming and computer graphics. I'm a huge fan of old console video games, and still, nothing beats a really good platformer. I want to create stuff that people can benefit from, and hopefully make the world somewhat of a better place."], [4.89, 4.0, 'B2577A', 'Eowyn', 'Photography and Traveling.'], [5.11, 7.33, 'B2577A', 'Faramir', 'Sketching, Hacking stuff, Cooking'], [5.17, 5.33, 'B2577A', 'Ferny', 'Graphic design, photography, bartending'], [4.39, 4.67, 'B2577A', 'Frodo', "I like to work with graphics and stuff where you actually see what yo're accomplishing. I like to spend time with friends and climb on my spare time"], [5.39, 8.0, 'B2577A', 'Galadriel', 'I have been working a programmer in the mobile space for the past 4 years before I joined master school here at KTH. I am extremely interested in how programming plays its role in creating art forms and that design married with technology can produce amazing experiences. I play basketball and enjoy equestrian sports a lot. I code on hobby projects when I am free and that had led me to pursue a startup earlier as well.'], [5.44, 5.0, 'B2577A', 'Gamgee', 'I like playing computer games and hanging with my girlfriend'], [4.89, 7.67, 'B2577A', 'Gandalf', ''], [3.33, 3.67, 'B2577A', 'Gollum', "When people ask me what interests me, I often answer saying that I am inherently curious. With that I mean I'm interest in basically everything that crosses my path, from science to arts to stupid internet things. Now, on a deeper level, academically speaking, I like to think about how technology and society interact, how this things we create end up shaping us. in fact that is the reason I left Brazil to study here. \nAs for hobbies, in my spare time lately I have been trying to learn how to code (basically JavaScript and HTML). Also, I am passionate about music (I used to play guitar and violin) and in the past months I have grown an interest on cooking."], [4.17, 6.33, 'B2577A', 'Gorbag', "I did my Bachelor in Computer Engineering and worked for almost 3 years as a software developer. Even though I love programming, I realised that programming on a topic that I have no interest in, is really depressing. So I applied to KTH and moved to Stockholm to learn more about a topic I'm interested on programming.\n\nI like playing video games in my free time. I can be found browsing Steam for survival, city-building games or indie games. I follow most of AAA titles too. I also watch movies, tv-series and read books. And recently, I got inspirited by a book I've read and started baking cookies (random :) ) ."], [4.78, 5.33, 'B2577A', 'Grimbold', 'Cooking, eating, enjoying beer'], [4.94, 6.67, 'B2577A', 'Grishnakh', 'Machine Learning and drinking beer'], [4.44, 3.67, 'B2577A', 'Haldir', 'Kitesurfing, Freediving, Surfing, Skiing and Product Development'], [5.61, 8.33, 'B2577A', 'Hama', 'Have basic knowledge about C C++ and program softeware ex. UE4, unity, visual studio'], [5.11, 6.0, 'B2577A', 'Idril', ''], [5.17, 6.0, 'B2577A', 'Irolas', 'Astronomy, virtual reality, gaming, music'], [5.11, 6.33, 'B2577A', 'Isildur', 'Game development, creating music, creative work'], [4.94, 5.0, 'B2577A', 'Kili', 'Watch documentaries, badminton, food'], [4.94, 6.67, 'B2577A', 'Legolas', 'Already work as developer for 8 years, full-stack, mostly front-end. I like developing web applications with new technologies (angularjs, bootstrap,...). Hobbies are: football, hunting & woodcrafting.'], [4.33, 4.0, 'B2577A', 'Lindir', 'I like photography and to play music. I like good design and functional tecnology.'], [4.5, 6.33, 'B2577A', 'Lurtz', 'rock climbing, reading, drinking coffee'], [5.28, 5.33, 'B2577A', 'Madril', 'I like photography, music and new technology / technology related services/products.'], [5.56, 6.0, 'B2577A', 'Morwen', "I'm very active in sports.  I'm practicing a sport called trampoline which I do at an elite level meaning I'm in the national team of Sweden and I get to compete in Nordic, European and World Championships. Apart from sports I play video games,  I fiddle around in Unity and compose as well as produce music on my own using Propellerheads Reason DAW. I like to learn a little about everything."], [1.83, 3.0, 'B2577A', 'Ohtar', 'My interests are technology, science, computers, games, nature and fitness.'], [4.78, 8.0, 'B2577A', 'Oin', 'Music, piano, asian culture'], [6.78, 7.33, 'B2577A', 'Otho', ''], [4.94, 4.33, 'B2577A', 'Pelendur', 'Drumset'], [4.28, 6.33, 'B2577A', 'Pippin', 'Art, design, computer games, programming'], [4.28, 5.33, 'B2577A', 'Rian', "I'm a huge gamer, love boardgames and videogames. Also pretty big into art in general, books and movies and music."], [5.5, 6.67, 'B2577A', 'Sauron', 'Sports, dancing, hiking, travelling'], [5.11, 7.67, 'B2577A', 'Smaug', 'Technologies, innovation, creating a product not only being fancy but also useful.'], [5.28, 8.33, 'B2577A', 'Theodred', 'I enjoy brewing beer, playing around with OpenGL and warm weather!'], [6.78, 8.0, 'B2577A', 'Thorin', 'Music (I play guitar decently enough and am a singer, though a pretty mediocre one. And my favourite song atm is this one: https://www.youtube.com/watch?v=tlAiq0_BXac ), Photography, Hiking'], [5.61, 6.0, 'B2577A', 'Ugluk', 'Movies, video games and ice hockey!'], [6.0, 8.67, 'B2577A', 'Uruk', 'Gokarting, cooking, manga/anime, basketball, horror movies, reading fiction novels']];

    var cat3_data = [[4.78, 7.0, '40B8AF', 'Aldor', 'I have great interest in visual design and filmmaking.'], [4.67, 6.0, '40B8AF', 'Aragorn', "I have been an aviation enthusiast since I was a kid, although I do not hold a pilot's license (yet). I enjoy cooking and I try to follow a healthy lifestyle with regular physical activity, such as cycling, running or team sports, mostly football. I have developed an increasing interest in all sorts of water-sports over the past few years, mostly in free-diving and surfing. I have an appreciation for all art forms but I am far from being an art-savvy."], [4.11, 5.0, '40B8AF', 'Balin', 'Some hobbies would be graphic design and 3D modeling.'], [4.5, 5.33, '40B8AF', 'Bereg', 'Science, sports, fashion, travel'], [4.72, 6.33, '40B8AF', 'Bombur', 'I like football and play on the school team. I also like painting, illustrating and programming.'], [4.39, 6.67, '40B8AF', 'Borin', 'Reading, music, arts, bikes, travel, technology, programming, humor.'], [6.06, 6.33, '40B8AF', 'Celeborn', "I'm interested in digital democracy, digital literacy, accessibility, usability and those kinds of questions. I also like stuff like tv-shows, travelling and cooking food."], [4.83, 5.67, '40B8AF', 'Damrod', ''], [5.22, 5.67, '40B8AF', 'Dorlas', ''], [4.56, 5.67, '40B8AF', 'Dwalin', "I'm interested in music, dance, traveling, and more."], [5.39, 8.33, '40B8AF', 'Eldarion', 'Play music & watch sports'], [5.0, 5.67, '40B8AF', 'Elendur', ''], [4.83, 6.0, '40B8AF', 'Freda', 'Startups and arts especially photography'], [4.56, 3.67, '40B8AF', 'Gimli', 'Diving, wildlife and painting'], [3.5, 4.33, '40B8AF', 'Haleth', "I'm interested in HCI and front end programming. My hobbies are reading and watching youtube."], [6.33, 6.67, '40B8AF', 'Hardang', ''], [5.11, 6.0, '40B8AF', 'Maiar', 'I like programming (outside of school) when I get the time. As of late I have also become interested in savings/stocks and so on (still a novice though, but it can be fun at times). Other than that I like to paint (everything from walls to sketching a Disney character), used to play football but injuries happen so had to quit.'], [5.5, 7.0, '40B8AF', 'Mauhur', 'I always strive for progress, as a person and for my skills. I currently want to learn a lot about programming! My other interests are reading, socializing, drawing & computer games'], [5.94, 6.67, '40B8AF', 'Merry', 'I like exploring the world and face challenges. I love drawing and cooking.'], [3.17, 1.67, '40B8AF', 'Nessa', "Interested in design. Also interested in incorporating environmental beneficial media technology artefacts in homes and businesses (wrote my bachelor thesis about Smart homes), that's one of the reasons I chose this course. In my spare time I photograph and film for fun."], [4.61, 4.67, '40B8AF', 'Quickbeam', "I am interested in design overall, both product design and graphic design. Beside my studies, I am working as Art Director for the THS Union Sports Association. I am also helping small companies with logos and some printed material. In my spare time I work in a mens clothing store, I travel as much as I can and I also try to photograph as much as I can on my travels. I have an older brother that I think you might recognize a graduated KTH student whos visualization skills I'm trying to learn from."], [5.06, 7.33, '40B8AF', 'Sam', ''], [5.56, 6.0, '40B8AF', 'Smeagol', 'History and statistics, video games and films, digital painting, cooking.']];

    var data = full_data;



    $("#button1").click(function () {
        $('.chart').replaceWith(create_chart(cat2_data));
        console.log('first pressed')


    });
    $("#button2").click(function () {
        $('.chart').replaceWith(create_chart(cat3_data));
        var data = cat2_data;

    });
    $("#button3").click(function () {
        $('.chart').replaceWith(create_chart(cat1_data));
        var data = cat3_data;

    });

        $("#button4").click(function () {
        $('.chart').replaceWith(create_chart(full_data));


    });


    //console.log(data);
// can create multiple variables for data (for the filtering) and depending on which button was pressed different data var is used to visualize


    var create_chart = function (data) {


        var margin = {top: 20, right: 15, bottom: 60, left: 60}
            , width = 1050 - margin.left - margin.right
            , height = 600 - margin.top - margin.bottom;

        var x = d3.scale.linear()
            .domain([0, d3.max(data, function (d) {
                return d[0];
            })])
            .range([0, width]);

        var y = d3.scale.linear()
            .domain([0, d3.max(data, function (d) {
                return d[1];
            })])
            .range([height, 0]);

        var chart = d3.select('body')
            .append('svg:svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .attr('class', 'chart')


        var main = chart.append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'main')

        // draw the x axis
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient('bottom');

        main.append('g')
            .attr('transform', 'translate(0,' + height + ')')
            .attr('class', 'main axis date')
            .call(xAxis);


        // draw the y axis
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient('left');


        main.append('g')
            .attr('transform', 'translate(0,0)')
            .attr('class', 'main axis date')
            .call(yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .text("Highest Score")


        var g = main.append("svg:g");

        g.selectAll("scatter-dots")
            .data(data)
            .enter().append("svg:circle")
            .attr("cx", function (d, i) {
                return x(d[0]);
            })
            .attr("cy", function (d) {
                return y(d[1]);
            })
            .attr("r", 15)
            .style("fill", function (d) {
                return d[2];
            })
            .append("title")
            .text(function (d) {
                return d[3] + ", Interest: " + d[4];
            });

    };

    create_chart(full_data);

};


$(document).ready(main);