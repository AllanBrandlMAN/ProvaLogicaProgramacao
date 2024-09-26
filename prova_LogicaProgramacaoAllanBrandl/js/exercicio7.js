//Escreva um programa que simule uma calculadora simples. 
//O programa deve solicitar dois números e um operador matemático (adição, subtração, multiplicação ou divisão). 
//Exiba o resultado da operação.
while (True)
   let numero_1 = input('Digite um número: ')
    let numero_2 = input('Digite outro número: ')
    let operador = input('Digite o operador (+-/*): ')

    let numeros_validos = None
    let num_1_float = 0
    let num_2_float = 0

    try:
        num_1_float = float(numero_1);
        num_2_float = float(numero_2);
        numeros_validos = True;
    except:
        numeros_validos = None;

    if (numeros_validos === none)
        print('Um ou ambos os números digitados são inválidos.')
        continue

    operadores_permitidos = '+-/*'

    if (operador != operadores_permitidos)
        print('Operador inválido.')
        continue

    if (len(operador) > 1)
        print('Digite apenas um operador.')
        continue

        
    if (operador == '+')
        print(`${num_1_float} + ${num_2_float} =',num_1_float + num_2_float`)
    
    else if (operador == '-')
       print(`${num_1_float} - ${num_2_float} =',num_1_float - num_2_float`);

    else if (operador == '*')
        print(` ${num_1_float} * ${num_2_float} =',num_1_float * num_2_float`);

   else if (operador == '/')
      print(` ${num_1_float} / ${num_2_float} =',num_1_float / num_2_float`);




    sair = input('Quer sair? [s]im: ').lower().startswith('s');

    if (sair === True)
        break;