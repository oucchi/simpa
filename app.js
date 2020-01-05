



















// Работаем с событиями
(function() {
    function слушатель(msg) {
        console.log(msg);
       }
       
       const вышка = new EE();
       
       вышка
            .on("tv", слушатель)
            .on("радио", слушатель);

       вышка.emit("tv", "Пришла новость");
})();





const app = (function() {

    const db = (function() {
        let store = []; // хранилище
    
        //-----]>
        function createHero(name, hp, mp, atk) {
            let id = store.length; // берём длину и присвоим в id
            let hero = {id, name, hp, mp, atk};
            store.push(hero); // поместим в конец store объект { }
            return hero;
        }
    
        function getHero(id) {
            return store.find (e => e.id == id);
        }
    
        //------]>
    
        return {createHero, getHero};
    })();

    //--------]>
    
    function zames(ataker, target) {
        target.hp -= ataker.atk + parseInt(Math.random() * 55);
    
        if(target.hp < 0) {
            target.hp = 0;
        }
    }
    
    let boo = db.createHero("Boo", 10, 3, 7);
    let hoo = db.createHero("Hoo", 990, 0, 15);
    
    //----[устанавливаем события клика]---}>
    
    $("#btn_zames").on("click", function() {
        zames(boo, hoo);
    
        $("#name").html( hoo.name ); // JSON.parse("[1,2]") => false
        $("#hp").html( hoo.hp ); // JSON.parse("[1,2]") => false
    });

    $("#btn_add_hero").on("click", function() {
        const name = prompt("имя героя","axe");
        const hp = parseInt (Math.random ()*50 + 500);
        const mp = parseInt (Math.random ()*50 + 500);
        const atk = parseInt (Math.random ()*50 + 30);

        db.createHero(name,hp,mp,atk);
    });

    //-------]>

    let x = 3;

    return {db, x, key: 3444};
})();
