let emptyShip = new Ship(1, 3)

function Ship(draft, crew) {
    this.draft = draft
    this.crew = crew
    this.jumlah = function() {
        let rumus = this.draft + (1.5 * this.crew)
        if(rumus > 20) {
            return "Banyak Nih Muatan Kapalnya"
        }
        else{
            return "Lebih Banyak Muatan Orangnya"
        }
    }
}


console.log(emptyShip.jumlah())

