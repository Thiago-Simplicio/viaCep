import myCache from "node-cache";
import fetch from "node-fetch";

const cache = new myCache({ stdTTL: 5 });

class cepServices {
  public async viaCep(cep: any) {
    let cepDataViaCep: any[] = [];
    let cepDataCache: any[] = [];

    if (!cep) {
      return `Digite o seu cep para iniciar a busca`;
    } else {
      if (cache.has("cep_user")) {
        const data = cache.get("cep_user");

        cepDataCache.push(data, {
          msg: `busca pelo cache`,
        });

        return cepDataCache;
      } else {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

        const data = await response.json();

        cache.set("cep_user", data);

        cepDataViaCep.push(data, {
          msg: `busca realizada pelo viaCep`,
        });

        return cepDataViaCep;
      }
    }
  }
}

export { cepServices };
