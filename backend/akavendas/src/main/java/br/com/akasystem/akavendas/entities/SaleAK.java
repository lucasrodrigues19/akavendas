package br.com.akasystem.akavendas.entities;

import java.time.LocalDate;

import javax.persistence.ConstraintMode;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import br.com.akasystem.akavendas.entities.main.EntityMain;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name="tb_sales")
public class SaleAK extends EntityMain {

	
	private Integer visited;
	private Integer deals;
	private Double amount;
	private LocalDate date;
	private Long saller_id;

	@ManyToOne
	@JoinColumn(name = "seller_id")
	private SellerAK seller;
}
