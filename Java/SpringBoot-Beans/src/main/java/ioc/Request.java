package ioc;
// Inversion of control example

public class Request {

    public static void main(String[] args) {
        Request request = new Request();

        request.write();
    }

    private SendEmails send = SendEmails.obterDadosEmail();

    public void write() {
        this.send.returnMsg("Request Created!");
    }

}