/**
* makecode WhaleySans Font Package.
* From microbit/micropython Chinese community.
* http://www.micropython.org.cn
*/

//% weight=100 color=#cc1280 icon="F" block="WhaleySans Font"
namespace whaleysans {
    let FONT = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
        [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 1, 1]
    ]
    let img: Image = null
    img = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)

    /**
     * show a number
     * @param dat is number will be show, eg: 10
     */
    //% blockId="show_whaleysans_number" block="show a whaleysans number %dat"
    //% dat.min=0 dat.max=99
    export function showNumber(dat: number): void {
        if(dat<0)
            dat=0;

        let a = FONT[Math.idiv(dat, 10) % 10];
        let b = FONT[dat % 10];

        for (let i = 0; i < 5; i++) {
            img.setPixel(0, i, 1 == a[i * 2])
            img.setPixel(1, i, 1 == a[i * 2 + 1])
            img.setPixel(3, i, 1 == b[i * 2])
            img.setPixel(4, i, 1 == b[i * 2 + 1])
        }
        img.showImage(0, 10);
    }
}