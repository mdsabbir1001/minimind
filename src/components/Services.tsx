import React, { useState } from 'react';
import { Palette, Layout, PenTool, Camera, Globe, Megaphone, X, ChevronLeft, ChevronRight } from 'lucide-react';

const packageList = [
	{
		name: 'Normal',
		features: ['Basic Design', '2 Revisions', 'Delivery: 2 Days'],
		price: '$49',
	},
	{
		name: 'Standard',
		features: [
			'Advanced Design',
			'5 Revisions',
			'Source File',
			'Delivery: 3 Days',
		],
		price: '$99',
	},
	{
		name: 'Premium',
		features: [
			'Premium Design',
			'Unlimited Revisions',
			'Source File',
			'Priority Support',
			'Delivery: 5 Days',
		],
		price: '$199',
	},
	{
		name: 'Custom',
		features: ['Fully Custom Solution', 'Consultation', 'Flexible Delivery'],
		price: 'Contact Us',
	},
];

const services = [
	{
		icon: Palette,
		title: 'Brand Identity Design',
		description:
			'Complete brand identity packages including logos, color schemes, and brand guidelines.',
		features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
	},
	{
		icon: Layout,
		title: 'Web & UI Design',
		description:
			'Modern, responsive web designs and user interfaces that engage and convert.',
		features: ['Website Design', 'UI/UX Design', 'Mobile Apps', 'Wireframes'],
	},
	{
		icon: PenTool,
		title: 'Graphic Design',
		description:
			'Creative graphic design solutions for all your marketing and business needs.',
		features: ['Brochures', 'Flyers', 'Posters', 'Business Cards'],
	},
	{
		icon: Camera,
		title: 'Marketing Materials',
		description:
			'Eye-catching marketing materials that help your business stand out from the competition.',
		features: [
			'Social Media Graphics',
			'Banners',
			'Advertisements',
			'Presentations',
		],
	},
	{
		icon: Globe,
		title: 'Digital Assets',
		description:
			'Digital design assets optimized for online platforms and digital marketing.',
		features: ['Email Templates', 'Web Banners', 'Icons', 'Illustrations'],
	},
	{
		icon: Megaphone,
		title: 'Agency Support',
		description:
			'White-label design services for marketing and development agencies.',
		features: [
			'Project Collaboration',
			'Quick Turnaround',
			'Scalable Solutions',
			'Quality Assurance',
		],
	},
];

const GOOGLE_SCRIPT_URL =
	'https://script.google.com/macros/s/AKfycbwlHUS9SFVDjlutB7-fDZOEoKVE4kiLOOt6PFBkRsDAAm5rqjhIaIAoI0982PCkWMvwfg/exec';

const Services = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedService, setSelectedService] = useState<any>(null);
	const [orderModal, setOrderModal] = useState(false);
	const [selectedPackage, setSelectedPackage] = useState<any>(null);
	const [form, setForm] = useState({ name: '', email: '', phone: '', note: '' });
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [packageIndex, setPackageIndex] = useState(0);

	const handleViewPackage = (service: any) => {
		setSelectedService(service);
		setModalOpen(true);
		setPackageIndex(0);
	};

	const handleOrderNow = (pkg: any) => {
		setSelectedPackage(pkg);
		setModalOpen(false);
		setOrderModal(true);
	};

	const handleFormChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleOrderSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setSuccess(false);
		try {
			const res = await fetch(GOOGLE_SCRIPT_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...form,
					service: selectedService.title,
					package: selectedPackage.name,
				}),
			});
			const data = await res.json();
			if (data.result === 'success') {
				setSuccess(true);
				setForm({ name: '', email: '', phone: '', note: '' });
			} else {
				alert('Order failed. Try again.');
			}
		} catch (err) {
			alert('Order failed. Try again.');
		}
		setLoading(false);
	};

	return (
		<section id="services" className="py-20 bg-gray-50">
			{/* Order Modal */}
			{orderModal && selectedPackage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
					<div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-2 p-6 relative">
						<button
							className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
							onClick={() => setOrderModal(false)}
							aria-label="Close"
						>
							<X size={28} />
						</button>
						<h2 className="text-xl font-bold mb-4 text-center">
							Order: {selectedService.title} - {selectedPackage.name}
						</h2>
						{success ? (
							<div className="text-green-600 text-center font-semibold py-8">
								Order placed successfully!
							</div>
						) : (
							<form onSubmit={handleOrderSubmit} className="space-y-4">
								<input
									className="w-full border rounded px-3 py-2"
									name="name"
									placeholder="Your Name"
									required
									value={form.name}
									onChange={handleFormChange}
								/>
								<input
									className="w-full border rounded px-3 py-2"
									name="email"
									type="email"
									placeholder="Your Email"
									required
									value={form.email}
									onChange={handleFormChange}
								/>
								<input
									className="w-full border rounded px-3 py-2"
									name="phone"
									placeholder="Phone Number"
									required
									value={form.phone}
									onChange={handleFormChange}
								/>
								<textarea
									className="w-full border rounded px-3 py-2"
									name="note"
									placeholder="Project Details (optional)"
									value={form.note}
									onChange={handleFormChange}
								/>
								<button
									type="submit"
									className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
									disabled={loading}
								>
									{loading ? 'Placing Order...' : 'Place Order'}
								</button>
							</form>
						)}
					</div>
				</div>
			)}

			{/* Service Modal */}
			{modalOpen && selectedService && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
					<div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-2 p-8 pt-10 relative flex flex-col items-center">
						<button
							className="absolute top-2 right-2 text-gray-500 hover:text-red-500 z-10"
							onClick={() => setModalOpen(false)}
							aria-label="Close"
						>
							<X size={28} />
						</button>
						{/* Service Icon and Title */}
						<div className="flex flex-col items-center mb-2">
							<selectedService.icon className="w-14 h-14 text-blue-600 mb-2" />
							<h2 className="text-xl font-bold text-center mb-1">
								{selectedService.title}
							</h2>
							<div className="text-sm text-gray-500 mb-2">
								Package {packageIndex + 1} of {packageList.length}
							</div>
						</div>
						{/* Single Package with Arrow Navigation */}
						<div className="flex items-center justify-center w-full mt-2 mb-2">
							<button
								className="bg-white shadow rounded-full p-2 mr-4 disabled:opacity-40"
								style={{ display: 'flex', alignItems: 'center' }}
								onClick={() => setPackageIndex((i) => Math.max(i - 1, 0))}
								aria-label="Scroll Left"
								disabled={packageIndex === 0}
							>
								<ChevronLeft size={32} />
							</button>
							<div
								className="border rounded-xl p-8 bg-white shadow-lg flex flex-col items-center mx-auto"
								style={{
									minWidth: 340,
									maxWidth: 400,
									minHeight: 340,
									maxHeight: 440,
									transition: 'all 0.2s',
								}}
							>
								<div className="flex items-center justify-between w-full mb-3">
									<span className="font-semibold text-blue-700 text-lg">
										{packageList[packageIndex].name} Package
									</span>
									<span className="font-bold text-gray-900 text-lg">
										{packageList[packageIndex].price}
									</span>
								</div>
								<ul className="list-disc list-inside text-gray-600 text-base space-y-2 mb-6 w-full">
									{packageList[packageIndex].features.map((f, i) => (
										<li key={i}>{f}</li>
									))}
								</ul>
								<button
									className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-auto text-lg"
									onClick={() => handleOrderNow(packageList[packageIndex])}
								>
									Order Now
								</button>
							</div>
							<button
								className="bg-white shadow rounded-full p-2 ml-4 disabled:opacity-40"
								style={{ display: 'flex', alignItems: 'center' }}
								onClick={() =>
									setPackageIndex((i) =>
										Math.min(i + 1, packageList.length - 1)
									)
								}
								aria-label="Scroll Right"
								disabled={packageIndex === packageList.length - 1}
							>
								<ChevronRight size={32} />
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						Our Services
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						From brand identity to digital marketing materials, we offer
						comprehensive design services to help your business succeed.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className={`
                bg-white p-8 rounded-2xl shadow-lg group transition-all duration-300
                hover:shadow-2xl hover:scale-105 cursor-pointer
              `}
							style={{
								boxShadow: '0 4px 32px 0 rgba(0, 80, 200, 0.08)',
							}}
						>
							<div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
								<service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3 relative group-hover:text-blue-700 transition-colors duration-300">
								{service.title}
								<span className="block h-1 w-0 group-hover:w-10 bg-blue-400 rounded-full transition-all duration-300 mt-1"></span>
							</h3>
							<p className="text-gray-600 mb-6">{service.description}</p>
							<ul className="space-y-2 mb-4">
								{service.features.map((feature, featureIndex) => (
									<li
										key={featureIndex}
										className="flex items-center text-sm text-gray-600"
									>
										<div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
										{feature}
									</li>
								))}
							</ul>
							<button
								className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-2"
								onClick={() => handleViewPackage(service)}
							>
								View Package
							</button>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<button
						onClick={() => {
							const element = document.getElementById('contact');
							if (element) {
								element.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
					>
						Get Started Today
					</button>
				</div>
			</div>
		</section>
	);
};

export default Services;
