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
        var ValorDeclarado = $('input[id="ValorDeclarado"]').val();
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
            "&nVlValorDeclarado=" + ValorDeclarado +
            "&sCdAvisoRecebimento=" + AvisoRecebimento +
            "&StrRetorno=xml&nIndicaCalculo=3";

        $.getJSON(url, function (data) {
            alert(" Valor: R$ " + data.cServico.Valor + "\r\n" +
                " Prazo de Entrega: " + data.cServico.PrazoEntrega + " dias" + "\r\n" +
                " Valor sem Adicionais: R$ " + data.cServico.ValorSemAdicionais + "\r\n" +
                " Valor Mao Propria: R$ " + data.cServico.ValorMaoPropria + "\r\n" +
                " Valor Aviso Recebimento: R$ " + data.cServico.ValorAvisoRecebimento + "\r\n" +
                " Valor Declarado: R$ " + data.cServico.ValorValorDeclarado + "\r\n" +
                " Entrega Domiciliar: " + data.cServico.EntregaDomiciliar + "\r\n" +
                " Entrega Sabado: " + data.cServico.EntregaSabado);
        });

    });
});
