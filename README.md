# Jogo da Velha (Tic Tac Toe)

Também conhecido aqui em Portugal como "Três em Linha", este projeto é a continuação de um exercício proposto no curso que estou fazendo. 
Abaixo, listei algumas funcionalidades programadas das quais foram implementadas por mim e também coloquei algumas intenções de melhorias que pretendo ir adicionando conforme vou praticando e me aprofundando no conteúdo do curso.

Você pode clicar **[aqui](https://cristianopaludo.github.io/jogoDaVelha/)** para ver como ficou! 

***

## Parte Visual (interface)
### Placar
- Nome dos Jogadores
    - [x] Botão para editar o nome
        > Condição para que o botão apareça apenas na primeira rodada e antes da primeira jogada
    - [x] Input para receber o nome
    - [x] Botão para confirmar o novo nome
        > Condição para em caso receber um valor vazio, manter o nome de antes
- Emblema dos jogadores estático
- Placar mostrando o número de vitórias de um jogador
    > Zera ao pressionar o botão "Novo Jovo"
- Indicador do jogador da vez
    - [x] Animação
    - [x] Alternância entre o jogador que começou a partida
        > O perdedor irá começar jogando a próxima partida
### Contador do número de rodadas
1. Ao pressionar "Restart" antes do término da partida o contador não contabiliza a rodada
2. Ao pressionar "Novo Jogo" a contagem é reiniciada
### Tabuleiro do jogo
1. Animação de click em cada quadrado
    > Uma animação sutil de zoom
2. Highlight dos quadrados que formaram a jogada vencedora
### Tela do ganhador 
1. Mostra o emblema de quem ganhou
2. Botão para fechar a tela
### Botão Restart
> Prepara o tabuleiro para a próxima rodada
### Botão Novo Jogo
> Chama a função do "Restart" além de zerar os contadores do tabuleiro

## Parte Lógica
- [x] Empate
- [x] Botão Restart
- [x] Botão Novo Jogo
- [x] Criação de verificadores dos três estados citados acima
    > Feito para disparar os gatilhos das funções da interface

***

## Melhorias que serão adicionadas no futuro
- [ ] Em placar, na vez do jogador, ao pressionar os botões "Restart/Novo Jogo" antes do término da partida, o jogador perderá a sua vez de jogar
- [ ] Melhorar o layout da tela do ganhador
- [ ] Adicionar som no projeto (com opção de -mute-)
- [ ] Permitir o usuário escolher seus próprios símbolos
- [ ] Elaborar um sistema de "Melhor de Três" rodadas (md3)
- [ ] Criar o local Storage
- [ ] Melhorar a responsividade
- [ ] Possibilidade de jogar online

Obrigado por ter lido até aqui!

Sugestões, criticas e comentários serão bem vindos. 


