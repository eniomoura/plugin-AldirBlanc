<?php

return [
    'header' =>[       
        'CPF',
        'NOME_SOCIAL', 
        'CNPJ',
        'RAZAO_SOCIAL',             
        'LOGRADOURO',
        'NUMERO',
        'COMPLEMENTO',
        'BAIRRO',
        'MUNICIPIO',
        'CEP',
        'ESTADO',
        'TELEFONE',
        'NUM_BANCO',
        //'TIPO_CONTA_BANCO',        
        'AGENCIA_BANCO',
        'CONTA_BANCO',
        //'OPERACAO_BANCO',
        'VALOR',
        'INSCRICAO_ID',
        'INCISO',
    ],
    '1' => [ 
        'TIPO_PROPONENTE' => 'fisica',        
        'CPF' => 'field_25',
        'NOME_SOCIAL' => 'field_30',    
        'CNPJ' => '00000000000000',
        'RAZAO_SOCIAL' => 'TESTE',                
        // 'LOGRADOURO' => null,
        // 'NUMERO' => 'field_1121',
        // 'COMPLEMENTO' => 'field_1121',
        // 'BAIRRO' => 'field_1121',
        // 'MUNICIPIO' => 'field_1121',
        // 'CEP' => 'field_1121',
        'ESTADO' => 'GO',
        'TELEFONE' => 'field_22',
        'NUM_BANCO' => 'field_3' ,
        'TIPO_CONTA_BANCO' => 'field_4',        
        'AGENCIA_BANCO' => 'field_23',
        'CONTA_BANCO'  => 'field_2',
        'OPERACAO_BANCO'  => 'field_31',
        'VALOR' => '3000',        
        'INCISO' => 1,
    ],
    'parameters_default' => [
        'status' => '10',
        'searchType' => 'field_id',
        'proponentTypes' => [
            'fisica' => 'Pessoa Física',
            'juridica' => 'Pessoa Jurídica',
            'coletivo' => 'Coletivo',
            'juridica-mei' => 'Pessoa Jurídica - MEI'
        ]
    ],
];