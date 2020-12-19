# Bidea
Projeto feito para o processo seletivo da Bidea

A api busca dados de 3 apis sobre a cotação do dia atual das moedas: Dólar, UTM e UF em pesos chilenos e armazena em um banco de dados MongoDB a cotação do dia atual

Quando a rota get: /bideafactory/indicadoreshoy é acessada, a api verifica se a cotação armazenada no banco de dados é a cotação do dia atual, caso seja a api irá mostrar os dados armazenados, caso contrário ela irá atualizar os dados e após isso mostrar os dados atualizados.

# Tecnologias
  Express
  MongoDB
  Mongoose
  Axios
