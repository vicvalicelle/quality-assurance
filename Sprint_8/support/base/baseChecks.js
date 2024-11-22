import { check } from 'k6';

export class BaseChecks {
    checkStatusCode(response, expectedStatus = 200){
        check( response, {
            'status code check': (r) => r.status === expectedStatus,
        })
    }

    checkResponseSize(response, expectedSize = 1024){
        check( response, {
            'response size <= 1024': (r) => r.body.length <= expectedSize,
        })
    }

    checkResponseTime(response, expectedTime = 1000){
        check( response, {
            'response time': (r) => r.timings.duration < expectedTime,
        });        
    }

    checkResponseLoginSuccess(response){
        check(response, {
            'login check': (r) => r.body.includes('Login realizado com sucesso'),
        });
    }

    checkResponseToken(response){
        check(response, {
            'response token': (r) => r.body.includes('Bearer'),
        });
    }

    checkResponsePostSuccess(response){
        check(response, {
            'post check': (r) => r.body.includes('Cadastro realizado com sucesso'),
        });
    }
    
    checkResponseId(response){
        check(response, {
            'response id': (r) => r.body.includes('_id'),
        });
    }

    checkResponseDelSuccess(response){
        check(response, {
            'delete check': (r) => r.body.includes('Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário'),
        });
    }

    checkResponsePutSuccess(response){
        check(response, {
            'put check': (r) => r.body.includes('Registro alterado com sucesso'),
        });
    }

    checkResponseGetSuccess(response){
        check(response, {
            'get check': (r) => r.body.includes('quantidade'),
        });
    }

    checkResponseGetIdSuccess(response){
        check(response, {
            'get id check': (r) => r.body.includes('nome'),
        });
    }

    checkResponseGetIdCarrinhosSuccess(response){
        check(response, {
            'get id carrinhos check': (r) => r.body.includes('precoTotal'),
        });
    }

}
