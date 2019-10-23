$(document).ready(function () {
    //adiciona uma funçã ao click do botao
    $('#Button1').click(function () {
        var CodigoServiço = $('#CodigoServico').val();
        var CepOrigem = $('input[type="text"]').val();
        var CepDestino = $('input[type="text"]').val();
        var Peso = $('input[type="text"]').val();
        var Formato = $('input[type="text"]').val();
        var Comprimento = $('input[type="text"]').val();
        var Altura = $('input[type="text"]').val();
        var Largura = $('input[type="text"]').val();
        var ValorMaoPropria = $('#ValorMaoPropria').val();
        var ValorDeclarado = $('#ValorDeclarado').val();
        var AvisoRecebimento = $('#AvisoRecebimento').val();

        var url = "http://usysweb.com.br/api/correiosambev.php?nCdServico=" + CodigoServiço +
            "&sCepOrigem" + CepOrigem +
            "&sCepDestino" + CepDestino +
            "&nVlPeso" + Peso +
            "&nCdFormato" + Formato +
            "&nVlComprimento=" + Comprimento +
            "&nVlAltura" + Altura +
            "&nVlLargura" + Largura +
            "&sCdMaoPropria" + ValorMaoPropria +
            "&ValorDeclarado" + ValorDeclarado +
            "&sCdAvisoRecebimento" + AvisoRecebimento;

        $.getJSON(url, function (data) {
            alert(data.cServico.Valor);
        });

    });
});
