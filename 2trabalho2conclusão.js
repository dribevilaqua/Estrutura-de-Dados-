/*Ao executar o problema de Josephus usando vetor, o funcionamento é fácil de entender. As pessoas são colocadas em uma lista, e a cada rodada, contamos até M e eliminamos a pessoa naquela posição. O vetor vai diminuindo, e os índices vão se ajustando automaticamente. Para quem está começando, isso ajuda bastante, porque é mais visual e mais direto.

Porém, com um número grande de pessoas, o vetor começa a ficar lento. Isso acontece porque toda vez que uma pessoa é removida, o JavaScript precisa reorganizar os elementos restantes no vetor, e isso exige mais tempo e processamento.

Já na versão com lista encadeada, o código é um pouco mais difícil de entender no começo, porque usamos nós que apontam para o próximo, e o controle é feito manualmente com variáveis que representam quem está antes e quem está agora. Mas essa estrutura tem uma grande vantagem: ao remover alguém, a lista simplesmente pula esse nó sem precisar reorganizar tudo. Isso deixa o código mais eficiente em situações com muitas pessoas.

Em resumo, os dois métodos funcionam e chegam no mesmo resultado. O vetor é mais simples de entender para quem está começando, mas pode ficar mais lento em casos maiores. A lista encadeada exige um pouco mais de lógica, mas compensa pela eficiência e controle direto do que acontece.

Portanto, se você está aprendendo agora, comece com o vetor para entender a lógica. Depois que estiver mais confiante, experimente a lista encadeada para ver como ela funciona e por que ela é útil em situações maiores ou mais complexas.*/