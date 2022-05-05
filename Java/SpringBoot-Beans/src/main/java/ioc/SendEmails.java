package ioc;
// Inversion of control example

public class SendEmails {

    public SendEmails(String type, String address, String password) {

    }

    public static SendEmails obterDadosEmail() {
        return new SendEmails("smtp", "contact@email.com", "password");
    }

    public void returnMsg(String message) {
        System.out.println("Email sent!");
    }

}