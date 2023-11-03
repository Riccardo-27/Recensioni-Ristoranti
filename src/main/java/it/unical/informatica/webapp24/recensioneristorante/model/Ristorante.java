package it.unical.informatica.webapp24.recensioneristorante.model;

public class Ristorante {
    String nome;
    String descrizione;

    public String getNome() {
        return nome;
    }

    public String getDescrizione() {
        return descrizione;
    }

    public String getUbicazione() {
        return ubicazione;
    }

    String ubicazione;

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }


    public void setUbicazione(String ubicazione) {
        this.ubicazione = ubicazione;
    }

    public Ristorante(String nome, String descrizione, String ubicazione)
    {
        this.nome = nome;
        this.descrizione = descrizione;
        this.ubicazione=ubicazione;
    }

    public static void main(String[] args) {
        Ristorante r1 = new Ristorante("Nome", "si mangia bene", "cosenza");
        r1.setNome("girone dei golosi");
    }


}
