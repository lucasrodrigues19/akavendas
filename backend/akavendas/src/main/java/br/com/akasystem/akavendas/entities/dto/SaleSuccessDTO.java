package br.com.akasystem.akavendas.entities.dto;

import java.io.Serializable;

import br.com.akasystem.akavendas.entities.SellerAK;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@NoArgsConstructor
@Getter
@Setter
public class SaleSuccessDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Long visited;
	private Long deals;
	
	
	public SaleSuccessDTO(SellerAK seller,Long visited,Long  deals) {
		log.info("Passo o seller como parametro por que no postgres por que preciso agrupar por seller e não pelo nome");
		this.sellerName = seller.getName();
		this.visited =  visited;
		this.deals = deals;
	}
}
