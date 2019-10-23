$(document).ready(function () {
    //adiciona uma funçã ao click do botao
    $('#Button1').click(function () {
        var CodigoServico = $('#CodigoServico').val();
        var CepOrigem = $('input[name="CepOrigem"]').val();
        var CepDestino = $('input[name="CepDestino"]').val();
        var Peso = $('input[name="Peso"]').val();
        var Formato = $('select[name="Formato"]').val();
        var Comprimento = $('input[name="Comprimento"]').val();
        var Altura = $('input[name="Altura"]').val();
        var Largura = $('input[name="Largura"]').val();
        var Diametro = $('input[name="Diametro"]').val();
        var ValorMaoPropria = $('select[id="ValorMaoPropria"]').val();
        var ValorDeclarado = $('select[id="ValorDeclarado"]').val();
        var AvisoRecebimento = $('select[id="AvisoRecebimento"]').val();

        var url = "http://usysweb.com.br/api/correiosambev.php?nCdServico=" + CodigoServico +
            "&sCepOrigem=" + CepOrigem +
            "&sCepDestino=" + CepDestino +
            "&nVlPeso=" + Peso +
            "&nCdFormato=" + Formato +
            "&nVlComprimento=" + Comprimento +
            "&nVlAltura=" + Altura +
            "&nVlLargura=" + Largura +
            "&nVlDiametro=" + Diametro +
            "&sCdMaoPropria=" + ValorMaoPropria +
            "&ValorDeclarado=" + ValorDeclarado +
            "&sCdAvisoRecebimento=" + AvisoRecebimento + "&StrRetorno=xml&nIndicaCalculo=3";

        $.getJSON(url, function (data) {
            alert("Valor: " + data.cServico.Valor);
        });

    });
});
