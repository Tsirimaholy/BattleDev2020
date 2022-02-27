import { expect } from "chai"
import { pogemon, rules } from "../pogemon.js";
import { describe } from "mocha";
describe("The Pogemon game", () => {

    describe('Rules validation', () => {
        it('should return the winner card between two different card and swap if nedded', () => {
            expect(rules('plante', 'poison')).to.be.eq('plante')
            expect(rules('feu', 'eau')).to.be.eq('eau')
            expect(rules('eau', 'feu')).to.be.eq('eau')
        })
        it('should return n if the macth is null', () => {
            expect(rules('eau', 'eau')).to.deep.eql('n')
            expect(rules('plante', 'plante')).to.deep.eql('n')
        })
        it('should return n if at least one invalid card was parsed', () => {
            expect(rules('holla', 'plante')).to.deep.eql('n')
            expect(rules('plante', 'holla')).to.deep.eql('n')
            expect(rules('bla', 'okala')).to.deep.eql('n')
        })
    })

    describe("Main function", () => {

        it('should return -1 if there is no possible card order were sacha win', () => {
            expect(pogemon([3, "sol sol eau", "eau feu plante"])).to.be.eql(-1)
            expect(pogemon([3, "feu feu feu", "feu feu feu"])).to.be.eql(-1)
        })
        it('should return the winner card in the right order', () => {
            expect(pogemon([4, "feu plante eau plante", "feu plante eau poison"])).to.be.eql("eau feu plante poison")
            expect(pogemon([3, "alika akoho feu", "feu eau plante"])).to.be.eql("feu plante eau")
            expect(pogemon(
                [
                    '10',
                    'poison glace eau eau eau vol plante vol poison plante',
                    'plante sol plante plante feu sol plante plante plante plante']
            )
            ).to.be.eql("plante sol plante plante feu sol plante plante plante plante")
        })

    })

})
