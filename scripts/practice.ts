

function test() {

 let age: number = 30;

 let name: string | null | undefined = 'Jessica'

 let isHuman: boolean = true

 let cutiePatootie: any = true


 name = undefined

 cutiePatootie = 10

}

moreTest({
 id: 1,
 name: 'Loren',
 age: 34,
 // email: 'lorenpabst@gmail.com'
})

function moreTest(input: MoreTestInput) {


}

type MoreTestInput = {
 id: number;
 name: string;
 age: number;
 email?: string
}