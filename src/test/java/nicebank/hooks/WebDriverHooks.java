package nicebank.hooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriverException;
import support.KnowsTheDomain;

/**
 * Created by juan.hernandez on 11/27/17.
 */
public class WebDriverHooks {

    private KnowsTheDomain helper;

    public WebDriverHooks(KnowsTheDomain helper) {
        this.helper = helper;
    }

    @After
    public void finish(Scenario scenario){
        System.setProperty("webdriver.gecko.driver", "/Users/juan.hernandez/CukeBook/atm-example/src/test/resources/geckodriver");
        try{
            byte[] screenshot =
                    helper.getWebDriver().getScreenshotAs(OutputType.BYTES);
            scenario.embed(screenshot, "image/png");
        } catch (WebDriverException e){
            System.err.println(e.getMessage());
        } finally {
            helper.getWebDriver().close();
        }
    }
}
