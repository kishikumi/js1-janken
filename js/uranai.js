alert(1);

// ラブコメボタン
$(function () {
        function love_btn() {
        const cont = Math.ceil(Math.random() * 4);
        if (cont === 1) {
            $(".name").html("愛の不時着");
            $(".text").html("財閥の娘がパラグライダー事故で不時着したのは、なんと北朝鮮。そこで出会ったのは現地の軍人で…。");
            $(".img").attr("src", "img/aino.jpg");
        }
        if (cont === 2) {
            $(".name").html("相続者たち");
            $(".text").html("財閥の御曹司と苦労人の女の子。LAで出会って心を通わせ始めていたものの、それぞれの事情で韓国に戻った2人が超名門私立高校で再会を果たし、運命が動き出す!");
            $(".img").attr("src", "img/相続者たち.jpg");
        }
        if (cont === 3) {
            $(".name").html("彼女の私生活");
            $(".text").html("アイドルに夢中な隠れオタク女子と、クールなハイスペック上司の最悪な出会いから始まる恋模様を描いたラブロマンス。");
            $(".img").attr("src", "img/kanozyo.jpg");
        }
        if (cont === 4) {
            $(".name").html("クレイジーラブ");
            $(".text").html("IQ190のトップスター数学講師と、死を宣告された存在感ゼロの秘書が描く、甘く殺伐としたクレイジーロマンスドラマ。");
            $(".img").attr("src", "img/crazy.jpg");
        }
    }
    $(".love_btn").on("click", function () {
        love_btn();
    });
});
// 人生いろいろボタン
$(function () {
        function human_btn() {
        const cont = Math.ceil(Math.random() * 4);
        if (cont === 1) {
            $(".name").html("サイコだけど大丈夫");
            $(".text").html("愛を知らない人気童話作家と、精神病棟で献身的に働く男。辛い思いを抱えて生きる2人の運命が交錯する時、互いの心に癒やしをもたらす、新たな人生の扉が開く。");
            $(".img").attr("src", "img/saiko2.jpg");
        }
        if (cont === 2) {
            $(".name").html("奇皇后");
            $(".text").html("13世紀末から14世紀中頃にかけて東アジアを支配した王朝・元。異国の皇室において、高麗人としての自尊心を失わず、自らの運命を切り開いていった彼女の波乱の生涯を綴った歴史ドラマ(50話以上あるので注意！)。");
            $(".img").attr("src", "img/kikougou.jpg");
        }
        if (cont === 3) {
            $(".name").html("今日もあなたに太陽を");
            $(".text").html("看護師出身であるイラハ作家の同名ウェブトゥーンが原作であり、精神健康医学科に初めて来た看護師‘チョン・ダウン’の視線で見つめる精神病棟内外の多様な話を胸温かく描いたヒーリングドラマ。");
            $(".img").attr("src", "img/taiyou.jpg");
        }
        if (cont === 4) {
            $(".name").html("わずか1000ウォンの弁護士");
            $(".text").html("安価な収入を得る弁護士が依頼人のために全力で立ち向かうヒューマン法廷コメディドラマ。");
            $(".img").attr("src", "img/100.jpg");
        }
    }
    $(".human_btn").on("click", function () {
        human_btn();
    });
});
// mental
$(function () {
    function mental_btn() {
        const cont = Math.ceil(Math.random() * 4);
        if (cont === 1) {
            $(".name").html("青い海の伝説");
            $(".text").html("絶滅直前の地球上最後の人魚が都市の天才詐欺師に会い、陸上での生活に適応しながら繰り広げられる予測不能な事件を通じて、笑いと楽しさを与えるファンタジー恋愛ドラマ");
            $(".img").attr("src", "img/aoiumi.jpg");
        }
        if (cont === 2) {
            $(".name").html("還魂");
            $(".text").html("魂を入れ変える“還魂術”によって運命がねじれた主人公たちがこれを乗り越え、成長していくファンタジーロマンスドラマ");
            $(".img").attr("src", "img/kankon.jpeg");
        }
        if (cont === 3) {
            $(".name").html("トッケビ〜君がくれた愛しい日々〜");
            $(".text").html("幽霊が見える女子高生チ・ウンタクは、不滅の存在であるトッケビ・キム・シンと出会い、彼の「花嫁」として運命を共にすることになる。");
            $(".img").attr("src", "img/tokebi.jpg");
        }
        if (cont === 4) {
            $(".name").html("九尾狐伝");
            $(".text").html("都会で暮らす九尾狐とミステリー番組のプロデューサーが織りなすファンタジーロマンス。");
            $(".img").attr("src", "img/kumiho.jpg");
        }
    }
    $(".mental_btn").on("click", function () {
        mental_btn();
    });
});


