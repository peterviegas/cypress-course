/// <reference types='cypress'/>

it('Equality', () => {
    const a = 1;
    expect(a, 'Deveria ser 1').equal(1);
})

it('Equality', () => {
    const a = 1;
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})

it('Truthy', () => {
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(true).to.be.true;
    expect(false).not.to.be.true;
    expect(b).to.be.null;
    expect(a).to.be.not.null;
    expect(c).to.be.undefined;
})

it('Object Equality', () => {
    const obj = {
        a: 1,
        b: 2
    }

    expect(obj).equal(obj);
    expect(obj).equals(obj);
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({ a: 1, b: 2 }) //verifica a propriedade do objeto
    expect(obj).eql({ a: 1, b: 2 }) //verifica a propriedade do objeto

    //Quando o objeto é grande e voce que verificar apenas parte dele.
    expect(obj).include({ a: 1 })
    expect(obj).to.have.property('b', 2) //Verifica a existência da propriedade e que seu valor é

    expect(obj).to.not.be.empty
    expect({}).to.be.empty

})