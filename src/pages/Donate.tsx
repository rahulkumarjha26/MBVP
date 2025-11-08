import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, CreditCard, Smartphone, Building2, CircleDollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Donate = () => {
  const { toast } = useToast();
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "where-needed",
    message: "",
  });

  const amounts = [500, 1000, 2500, 5000];

  const impactMapping: Record<number, string> = {
    500: "Provides school supplies for 5 children",
    1000: "Skills training for 1 woman for 1 month",
    2000: "Health check-up camp for 50 people",
    5000: "Revival & restoration of 1 village pond",
    10000: "Monthly livelihood support for 1 family",
  };

  const getImpact = (amount: number) => {
    const closest = [500, 1000, 2000, 5000, 10000].reduce((prev, curr) =>
      Math.abs(curr - amount) < Math.abs(prev - amount) ? curr : prev
    );
    return impactMapping[closest];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!paymentMethod) {
      toast({
        title: "Select Payment Method",
        description: "Please select a payment method to continue.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank You!",
      description: `Your ${donationType} donation of ₹${selectedAmount} will help transform lives.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-secondary to-primary text-white py-16 md:py-20">
          <div className="container px-4 text-center">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Make a Difference Today
            </h1>
            <p
              className="text-lg md:text-xl text-accent max-w-3xl mx-auto"
              style={{ fontFamily: 'Open Sans, sans-serif' }}
            >
              Your generosity creates lasting change for women, children, and the environment in Mithila
            </p>
          </div>
        </section>

        {/* Donation Form */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Donation Type Toggle */}
                <div className="bg-muted p-2 rounded-xl inline-flex w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setDonationType("one-time")}
                    className={`flex-1 sm:flex-initial px-8 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === "one-time"
                        ? "bg-primary text-white"
                        : "text-foreground/70"
                    }`}
                  >
                    One-Time
                  </button>
                  <button
                    type="button"
                    onClick={() => setDonationType("monthly")}
                    className={`flex-1 sm:flex-initial px-8 py-3 rounded-lg font-semibold transition-colors ${
                      donationType === "monthly"
                        ? "bg-primary text-white"
                        : "text-foreground/70"
                    }`}
                  >
                    Monthly
                  </button>
                </div>

                {/* Amount Selection */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">Select Amount</h2>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount("");
                        }}
                        className={`h-32 rounded-xl border-2 flex flex-col items-center justify-center transition-all hover:border-primary ${
                          selectedAmount === amount && !customAmount
                            ? "border-secondary bg-secondary text-white"
                            : "border-border bg-white"
                        }`}
                      >
                        <span className="text-2xl font-bold">₹{amount.toLocaleString()}</span>
                      </button>
                    ))}
                    <div className="h-32 relative">
                      <Input
                        type="number"
                        placeholder="Custom"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setSelectedAmount(parseInt(e.target.value) || 0);
                        }}
                        className="h-full text-center text-xl font-bold border-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Impact Display */}
                {selectedAmount > 0 && (
                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
                    <p className="font-semibold text-lg text-foreground">
                      Your Impact: <span className="text-accent">{getImpact(selectedAmount)}</span>
                    </p>
                  </div>
                )}

                {/* Donor Information */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">Your Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold mb-2">Donation Purpose</label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3 py-2 border border-input rounded-md"
                    >
                      <option value="where-needed">Where needed most</option>
                      <option value="women">Women's Empowerment</option>
                      <option value="children">Child Education</option>
                      <option value="environment">Environmental Conservation</option>
                      <option value="community">Community Development</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="block text-sm font-semibold mb-2">Message (Optional)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Leave a message..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-6">Choose Payment Method</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { id: "upi", icon: Smartphone, label: "UPI" },
                      { id: "card", icon: CreditCard, label: "Card" },
                      { id: "netbanking", icon: Building2, label: "Net Banking" },
                      { id: "transfer", icon: CircleDollarSign, label: "NEFT/IMPS" },
                    ].map((method) => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-6 rounded-xl border-2 flex flex-col items-center justify-center space-y-3 transition-all hover:border-secondary ${
                          paymentMethod === method.id
                            ? "border-secondary bg-secondary/10"
                            : "border-border"
                        }`}
                      >
                        <method.icon className={`h-8 w-8 ${paymentMethod === method.id ? "text-secondary" : "text-foreground/40"}`} />
                        <span className="font-semibold">{method.label}</span>
                        {paymentMethod === method.id && (
                          <Check className="h-5 w-5 text-secondary" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 bg-muted p-6 rounded-xl">
                  <div className="text-center">
                    <p className="font-bold text-sm mb-1">🔒 Secure Payment</p>
                    <p className="text-xs text-foreground/70">256-bit SSL encryption</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm mb-1">📄 Tax Deductible</p>
                    <p className="text-xs text-foreground/70">80G tax exemption available</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm mb-1">✓ 100% Impact</p>
                    <p className="text-xs text-foreground/70">Full amount supports our mission</p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-primary text-white font-bold text-lg py-6"
                  disabled={selectedAmount === 0 || !paymentMethod}
                >
                  Complete Donation of ₹{selectedAmount.toLocaleString()}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="py-16 bg-muted">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Your Donation Matters</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Direct Impact",
                    description: "100% of your donation goes directly to programs that transform lives.",
                  },
                  {
                    title: "Proven Results",
                    description: "33 years of community development with measurable, lasting outcomes.",
                  },
                  {
                    title: "Complete Transparency",
                    description: "Regular updates and detailed reports on how your contribution creates change.",
                  },
                ].map((reason, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl text-center">
                    <h3 className="text-xl font-bold text-primary mb-3">{reason.title}</h3>
                    <p className="text-foreground/70">{reason.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
